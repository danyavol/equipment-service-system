import { Sequelize } from "sequelize";
import { config } from "src/config";
import { createOrderSuppliesModel } from "./order-supply.model";
import { createOrderWorkModel } from "./order-work.model";
import { createOrderModel } from "./order.model";
import { createSupplyModel } from "./supply.model";
import { createWorkModel } from "./work.model";

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: 'postgres',
    logging: false
});

export const db = {
    sequelize,
    Orders: createOrderModel(sequelize),
    Supplies: createSupplyModel(sequelize),
    OrderSupplies: createOrderSuppliesModel(sequelize),
    Work: createWorkModel(sequelize),
    OrderWork: createOrderWorkModel(sequelize)
};

// Relations
db.Orders.belongsToMany(db.Supplies, { through: db.OrderSupplies });
db.Supplies.belongsToMany(db.Orders, { through: db.OrderSupplies });

db.Orders.belongsToMany(db.Work, { through: db.OrderWork });
db.Work.belongsToMany(db.Orders, { through: db.OrderWork });
