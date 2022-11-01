const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

import { db } from "@models/index";
import { insertOrdersSupplies } from "./order-supply.mock";
import { insertOrdersWorks } from "./order-work.mock";
import { insertOrders } from "./order.mock";
import { insertSupplies } from "./supply.mock";
import { insertWorks } from "./work.mock";

(async () => {
    // Clear all tables
    await db.sequelize.truncate({ cascade: true });

    // Insert mock data
    await Promise.all([
        insertOrders(),
        insertSupplies(),
        insertWorks()
    ]);

    // Junction tables
    await Promise.all([
        insertOrdersSupplies(),
        insertOrdersWorks()
    ]);
})()