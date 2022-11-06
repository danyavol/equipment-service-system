import { Router } from "express";
import { authOnly } from "src/services/auth.service";
import auth from "./auth.route";
import orders from "./orders.route";
import supplies from "./supplies.route";
import work from "./work.route";

const routes = Router();
export default routes;

routes.use('/orders', orders);
routes.use('/supplies', authOnly, supplies);
routes.use('/work', authOnly, work);
routes.use('/auth', auth);
