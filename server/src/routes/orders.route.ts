import { db } from "@models/index";
import { Status } from "@models/order.model";
import { Supply } from "@models/supply.model";
import { Work } from "@models/work.model";
import { Router } from "express";
import { Op } from "sequelize";
import { authOnly } from "src/services/auth.service";
import { getDifference } from "src/services/difference.service";
import { handleError } from "src/services/error-handle.service";

const orders = Router();
export default orders;

orders.get('/', authOnly, async (req, res) => {
    try {
        const result = await db.Orders.findAll({
            order: [
                ['updatedAt', 'DESC']
            ]
        });

        res.send(result);
    } catch (err) {
        handleError(res, err);
    }
});

orders.get('/:orderId', async (req, res) => {
    try {
        const { orderId } = req.params;

        const result = await db.Orders.findByPk(orderId, {
            include: [
                {
                    model: Work,
                    through: { attributes: [] }
                },
                {
                    model: Supply,
                    through: { attributes: [] },
                    attributes: { exclude: ['totalAmount', 'supplyDate'] }
                }
            ]
        });

        if (!result) return res.status(400).send('Invalid orderId');

        res.send(result);
    } catch (err) {
        handleError(res, err);
    }
});

orders.post('/', async (req, res) => {
    try {
        const { clientName, phoneNumber, email, description } = req.body;

        const newOrder = await db.Orders.create({
            clientName,
            phoneNumber,
            email,
            description,
            status: Status.New,
        }, {});

        res.send(newOrder.id);
    } catch (err) {
        handleError(res, err);
    }
});

orders.post('/admin', async (req, res) => {
    try {
        const { clientName, phoneNumber, email, description, status, supplies, works } = req.body;

        const newOrder = await db.Orders.create({
            clientName,
            phoneNumber,
            email,
            description,
            status,
        }, {});

        await Promise.all([
            db.OrderSupplies.bulkCreate(
                supplies.map((supplyId: string) => ({
                    orderId: newOrder.id,
                    supplyId
                }))
            ),
            db.OrderWork.bulkCreate(
                works.map((workId: string) => ({
                    orderId: newOrder.id,
                    workId
                }))
            )
        ]);

        res.send();
    } catch (err) {
        handleError(res, err);
    }
});

orders.put('/admin/:orderId', async (req, res) => {
    try {
        const { orderId } = req.params;
        const { clientName, phoneNumber, email, description, status, supplies, works } = req.body;

        const order = await db.Orders.findByPk(orderId);
        if (!order) return res.status(400).send('Invalid orderId');

        const promises: Promise<unknown>[] = [];

        // Update order details

        order.clientName = clientName;
        order.phoneNumber = phoneNumber;
        order.email = email;
        order.description = description;
        order.status = status;

        promises.push(order.save());

        // Update OrderSupplies

        const oldSupplies = await db.OrderSupplies.findAll({
            where: { orderId: orderId }
        });

        const newSupplies = supplies.map((supplyId: string) => ({ supplyId, orderId }));
        const suppliesDifference = getDifference(oldSupplies, newSupplies, (a, b) => a.supplyId === b.supplyId);

        if (suppliesDifference.addedItems.length) {
            promises.push( db.OrderSupplies.bulkCreate(suppliesDifference.addedItems) );
        }

        if (suppliesDifference.removedItems.length) {
            promises.push( 
                db.OrderSupplies.destroy({
                    where: {
                        orderId,
                        [Op.or]: suppliesDifference.removedItems.map(item => ({ supplyId: item.supplyId }))
                    }
                }) 
            );
        }

        // Update OrderWork

        const oldWork = await db.OrderWork.findAll({
            where: { orderId: orderId }
        });

        const newWork = works.map((workId: string) => ({ workId, orderId }));
        const workDifference = getDifference(oldWork, newWork, (a, b) => a.workId === b.workId);

        if (workDifference.addedItems.length) {
            promises.push( db.OrderWork.bulkCreate(workDifference.addedItems) );
        }

        if (workDifference.removedItems.length) {
            promises.push( 
                db.OrderWork.destroy({
                    where: {
                        orderId,
                        [Op.or]: workDifference.removedItems.map(item => ({ workId: item.workId }))
                    }
                }) 
            );
        }

        await Promise.all(promises);

        res.sendStatus(204);
    } catch (err) {
        handleError(res, err);
    }
})
