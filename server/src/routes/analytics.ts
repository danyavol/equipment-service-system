import { db } from "@models/index";
import { Order, Status } from "@models/order.model";
import { Supply } from "@models/supply.model";
import { Work } from "@models/work.model";
import { Router } from "express";
import { handleError } from "src/services/error-handle.service";

const analytics = Router();
export default analytics;

analytics.get('/', async (req, res) => {
    try {
        const allOrders = await db.Orders.findAll({
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

        const completedOrders = allOrders.filter(o => o.status === Status.Done);
        const newOrders = allOrders.filter(o => o.status === Status.New);

        const completedAmount = completedOrders.length;
        const completedSum = completedOrders.reduce((sum, o) => sum + getOrderCost(o), 0);

        const

        res.send({
            completedAmount,
            completedSum
        });
    } catch (err) {
        handleError(res, err);
    }
});

function getOrderCost(order: Order): number {
    const workCost = order.works?.reduce((sum, o) => sum + o.cost, 0) || 0;
    const suppliesCost = order.supplies?.reduce((sum, o) => sum + o.pieceCost, 0) || 0;
    return workCost + suppliesCost;
}