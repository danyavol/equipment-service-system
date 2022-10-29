import { db } from "@models/index";
import { Status } from "@models/order.model";
import { Router } from "express";

const routes = Router();
export default routes;

routes.get('/view', async (req, res) => {
    const result = await db.Orders.findAll();
    res.send(result);
});

routes.get('/add', async (req, res) => {
    await db.Orders.create({
        clientName: "Daniil",
        description: "Почините ПК",
        phoneNumber: "375291111111",
        status: Status.New
    });
    res.send("Success");
})

// routes.use('/api', apiRoutes);