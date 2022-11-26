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

        const completedOrders = getOrdersByStatus(allOrders, Status.Done);

        const completedAmount = completedOrders.length;
        const completedSum = completedOrders.reduce((sum, o) => sum + getOrderCost(o), 0);
        const averageOrderPrice = completedSum / completedAmount;

        const canceledAmount = getAmountByStatus(allOrders, Status.Cancel);
        const canceledPersentage = canceledAmount / allOrders.length * 100;

        const orderPrices = completedOrders.map(o => getOrderCost(o));

        res.send({
            completedAmount,
            completedSum,
            canceledAmount,
            canceledPersentage,
            averageOrderPrice,
            activeOrdersAmount: {
                newOrders: getAmountByStatus(allOrders, Status.New),
                readyForWork: getAmountByStatus(allOrders, Status.ReadyForWork),
                inProcess: getAmountByStatus(allOrders, Status.InProcess),
                resolved: getAmountByStatus(allOrders, Status.Resolved),
            },
            ordersAmountPerPeriod: {
                day: getAmountPerPeriod(allOrders, 24),
                week: getAmountPerPeriod(allOrders, 24 * 7),
                month: getAmountPerPeriod(allOrders, 24 * 7 * 30),
            },
            ordersAmountInRange: {
                lessThen50: getOrdersAmountInRange(orderPrices, null, 50),
                from50to100: getOrdersAmountInRange(orderPrices, 50, 100),
                from100to200: getOrdersAmountInRange(orderPrices, 100, 200),
                greaterThen200: getOrdersAmountInRange(orderPrices, 200, null),
            }
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

function getOrdersByStatus(allOrders: Order[], status: Status) {
    return allOrders.filter(o => o.status === status);
}

function getAmountByStatus(allOrders: Order[], status: Status) {
    return allOrders.filter(o => o.status === status).length;
}

function getAmountPerPeriod(orders: Order[], hours: number) {
    return orders.filter(o => Date.now() - o.createdAt.getTime() < hours*60*1000).length;
}

function getOrdersAmountInRange(ordersPrices: number[], min: null | number, max: null | number) {
    return ordersPrices.filter(price => 
        (min === null || price > min) &&
        (max === null || price < max) 
    ).length;
}