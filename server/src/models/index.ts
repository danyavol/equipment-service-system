import { Sequelize } from "sequelize";
import { config } from "src/config";
import { createOrderModel } from "./order.model";

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: 'postgres',
    logging: false
});

export const db = {
    sequelize,
    Orders: createOrderModel(sequelize)
};

sequelize.sync();