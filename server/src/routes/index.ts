import { db } from "@models/index";
import { Router } from "express";

const routes = Router();
export default routes;

routes.get('/view', async (req, res) => {
    const result = await db.Orders.findAll();
    res.send(result);
});

routes.get('/add', async (req, res) => {
    await db.Orders.create({
        name: "test",
        isUrgent: true
    });
    res.send("Success");
})

// routes.use('/api', apiRoutes);