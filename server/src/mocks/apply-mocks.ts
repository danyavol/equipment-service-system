const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

import { db } from "@models/index";
import { insertOrderSupplies } from "./order-supplies.mock";
import { insertOrderWork } from "./order-work.mock";
import { insertOrders } from "./order.mock";
import { insertSupplies } from "./supply.mock";
import { insertWork } from "./work.mock";

(async () => {
    // Clear all tables
    await db.sequelize.truncate({ cascade: true });

    // Insert mock data
    await Promise.all([
        insertOrders(),
        insertSupplies(),
        insertWork()
    ]);

    // Junction tables
    await Promise.all([
        insertOrderSupplies(),
        insertOrderWork()
    ]);
})()