import { db } from "@models/index";
import { Status } from "@models/order.model";
import { Supply } from "@models/supply.model";
import { Work } from "@models/work.model";
import { Router } from "express";
import { authOnly } from "src/services/auth.service";
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
