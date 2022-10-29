import { ForeignKey, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class OrderWork extends Model<InferAttributes<OrderWork>, InferCreationAttributes<OrderWork>> {
    declare orderId: ForeignKey<string>;
    declare workId: ForeignKey<number>;
}

export function createOrderWorkModel(sequelize: Sequelize) {
    return OrderWork.init({}, {
        sequelize,
        tableName: "OrderWork",
        timestamps: false
    });
}
