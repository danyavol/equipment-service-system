import { db } from "@models/index";
import { Order } from "@models/order.model";
import { Router } from "express";
import { handleError } from "src/services/error-handle.service";

const supplies = Router();
export default supplies;

supplies.get('', async (req, res) => {
    try {
        const supplies = await db.Supplies.findAll({
            include: [
                {
                    model: Order,
                    through: { attributes: [] },
                    attributes: ['id']
                },
            ],
            order: [
                ['supplyDate', 'DESC']
            ]
        });

        res.send(supplies);
    } catch (e) {
        handleError(res, e);
    }
});

supplies.get('/available', async (req, res) => {
    try {
        const supplies = await db.Supplies.findAll({
            include: [
                {
                    model: Order,
                    through: { attributes: [] },
                    attributes: ['id']
                }
            ],
            order: [
                ['supplyDate', 'DESC']
            ]
        });
        const filteredSupplies = supplies.filter(
            s => s.availableAmount ? s.availableAmount > 0 : false
        );

        res.send(filteredSupplies);
    } catch (e) {
        handleError(res, e);
    }
});

supplies.get('/:id', async (req, res) => {
    try {
        const supply = await db.Supplies.findByPk(req.params.id, {
            include: [
                {
                    model: Order,
                    through: { attributes: [] },
                    attributes: ['id']
                }
            ]
        });

        if (!supply) return res.status(400).send('Supply with such id not found');

        res.send(supply);
    } catch (e) {
        handleError(res, e);
    }
});

supplies.post('', async (req, res) => {
    try {
        const { title, pieceCost, totalAmount } = req.body;

        await db.Supplies.create({
            title,
            pieceCost,
            totalAmount
        }, {});

        res.sendStatus(204);
    } catch (e) {
        handleError(res, e);
    }
});

supplies.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, pieceCost, totalAmount } = req.body;

        const oldSupply = await db.Supplies.findByPk(req.params.id, {
            include: [
                {
                    model: Order,
                    through: { attributes: [] },
                    attributes: ['id']
                }
            ]
        });
        if (!oldSupply) return res.status(400).send('Supply with such id not found');

        const usedAmount = oldSupply.totalAmount - oldSupply.availableAmount!;
        if (usedAmount > totalAmount) return res.status(400).send('Used amount more than total amount');

        await db.Supplies.update({
            title,
            pieceCost,
            totalAmount,
            supplyDate: new Date()
        }, { where: { id } });

        res.sendStatus(204);
    } catch (e) {
        handleError(res, e);
    }
});

supplies.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const oldSupply = await db.Supplies.findByPk(id, {
            include: [
                {
                    model: Order,
                    through: { attributes: [] },
                    attributes: ['id']
                }
            ]
        });
        if (!oldSupply) return res.status(400).send('Supply with such id not found');

        if (oldSupply.totalAmount !== oldSupply.availableAmount!)
            return res.status(400).send('Can\'t delete supplies which were already used');

        await db.Supplies.destroy({ where: { id }});
        
        res.sendStatus(204);
    } catch (e) {
        handleError(res, e);
    }
});
