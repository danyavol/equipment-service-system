import { db } from "@models/index";
import { Status } from "@models/order.model";
import { Supply } from "@models/supply.model";
import { Work } from "@models/work.model";
import { Router } from "express";

const orders = Router();
export default orders;

orders.get('/', async (req, res) => {
    const result = await db.Orders.findAll();
    res.send(result);
});

orders.get('/:orderId', async (req, res) => {
    const { orderId } = req.params;
    const result = await db.Orders.findByPk(orderId, { include: [Work, Supply] });
    res.send(result);
});

orders.post('/', async (req, res) => {
    await db.Orders.create({
        clientName: "Daniil",
        description: "Почините ПК",
        phoneNumber: "375291111111",
        status: Status.New,
    }, {});
    res.send("Success");
})