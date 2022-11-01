import { db } from "@models/index";
import { Status } from "@models/order.model";
import { Supply } from "@models/supply.model";
import { Work } from "@models/work.model";
import { Router } from "express";
import { ValidationError } from "sequelize";

const orders = Router();
export default orders;

orders.get('/', async (req, res) => {
    try {
        const result = await db.Orders.findAll();

        res.send(result);
    } catch(e) {
        res.status(500).send(e);
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

        res.send(result);
    } catch(e) {
        res.status(500).send(e);
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
    } catch(e) {
        if (e instanceof ValidationError) {
            res.status(400).send(e);
        } else {
            res.status(500).send(e);
        }
    }
})