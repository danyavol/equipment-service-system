import { Router } from "express";
import orders from "./orders.route";
import supplies from "./supplies.route";

const routes = Router();
export default routes;

routes.use('/orders', orders);
routes.use('/supplies', supplies);
