import { db } from "@models/index";
import { insertOrdersSupplies } from "./order-supply.seed";
import { insertOrdersWorks } from "./order-work.seed";
import { insertOrders } from "./order.seed";
import { insertSupplies } from "./supply.seed";
import { insertUsers } from "./user.seed";
import { insertWorks } from "./work.seed";

(async () => {
    // Drop all tables and create them again
    await db.sequelize.sync({ force: true });

    // Insert mock data
    await Promise.all([
        insertOrders(),
        insertSupplies(),
        insertWorks(),
        insertUsers()
    ]);

    // Junction tables
    await Promise.all([
        insertOrdersSupplies(),
        insertOrdersWorks()
    ]);
})()