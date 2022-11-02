import { db } from "@models/index";
import { Order } from "@models/order.model";
import { Router } from "express";
import { handleError } from "src/services/error-handle.service";

const supplies = Router();
export default supplies;

supplies.get('', async (req, res) => {
    try {
        const supplies = await db.Supplies.findAll({ include: [
            {
                model: Order,
                through: { attributes: [] },
                attributes: ['id']
            }
        ]});

        res.send(supplies);
    } catch(e) {
        handleError(res, e);
    }
});

supplies.get('/available', async (req, res) => {
    try {
        const supplies = await db.Supplies.findAll({ include: [
            {
                model: Order,
                through: { attributes: [] },
                attributes: ['id']
            }
        ]});
        const filteredSupplies = supplies.filter(
            s => s.availableAmount ? s.availableAmount > 0 : false
        );
        
        res.send(filteredSupplies);
    } catch(e) {
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
    } catch(e) {
        handleError(res, e);
    }
})
