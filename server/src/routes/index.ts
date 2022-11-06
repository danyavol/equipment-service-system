import { Router } from "express";
import orders from "./orders.route";
import supplies from "./supplies.route";
import work from "./work.route";

const routes = Router();
export default routes;

routes.use('/orders', orders);
routes.use('/supplies', supplies);
routes.use('/work', work);
