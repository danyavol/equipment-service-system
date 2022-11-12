import { db } from "@models/index";
import { Order } from "@models/order.model";
import { Router } from "express";
import { handleError } from "src/services/error-handle.service";

const work = Router();
export default work;

work.get('', async (req, res) => {
    try {
        const work = await db.Work.findAll({
            include: [
                {
                    model: Order,
                    through: { attributes: [] },
                    attributes: ['id']
                },
            ],
            order: [
                ['updatedAt', 'DESC']
            ]
        });
        res.send(work);
    } catch(e) {
        handleError(res, e);
    }
});

work.get('/:id', async (req, res) => {
    try {
        const work = await db.Work.findByPk(req.params.id, {
            include: [
                {
                    model: Order,
                    through: { attributes: [] },
                    attributes: ['id']
                }
            ]
        });

        if (!work) return res.status(400).send('Work with such id not found');

        res.send(work);
    } catch (e) {
        handleError(res, e);
    }
});

work.post('', async (req, res) => {
    try {
        const { title, cost } = req.body;

        await db.Work.create({
            title,
            cost
        }, {});

        res.sendStatus(204);
    } catch(e) {
        handleError(res, e);
    }
});

work.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, cost } = req.body;

        await db.Work.update({
            title,
            cost
        }, { where: { id } });

        res.sendStatus(204);
    } catch (e) {
        handleError(res, e);
    }
});

work.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const oldSupply = await db.Work.findByPk(id, {
            include: [
                {
                    model: Order,
                    through: { attributes: [] },
                    attributes: ['id']
                }
            ]
        });
        if (!oldSupply) return res.status(400).send('Supply with such id not found');

        if (oldSupply.orders!.length)
            return res.status(400).send('Can\'t delete work which were already used');

        await db.Work.destroy({ where: { id }});
        
        res.sendStatus(204);
    } catch (e) {
        handleError(res, e);
    }
});
