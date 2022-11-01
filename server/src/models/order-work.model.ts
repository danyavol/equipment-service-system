import { ForeignKey, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class OrderWork extends Model<InferAttributes<OrderWork>, InferCreationAttributes<OrderWork>> {
    declare OrderId: ForeignKey<string>;
    declare WorkId: ForeignKey<number>;
}

export function createOrderWorkModel(sequelize: Sequelize) {
    return OrderWork.init({}, {
        sequelize,
        tableName: "OrderWork",
        timestamps: false
    });
}
