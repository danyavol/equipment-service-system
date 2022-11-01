import { Router } from "express";
import orders from "./orders.route";

const routes = Router();
export default routes;

routes.use('/orders', orders);
