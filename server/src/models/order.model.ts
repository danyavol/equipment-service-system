import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    declare name: string;
    declare isUrgent: boolean;
}

export function createOrderModel(sequelize: Sequelize) {
    return Order.init({
        name: {
            type: DataTypes.STRING,
        },
        isUrgent: {
            type: DataTypes.BOOLEAN
        }
    }, { 
        sequelize,
        tableName: "Orders"
    });
}