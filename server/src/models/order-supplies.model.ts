import { ForeignKey, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class OrderSupplies extends Model<InferAttributes<OrderSupplies>, InferCreationAttributes<OrderSupplies>> {
    declare orderId: ForeignKey<string>;
    declare supplyId: ForeignKey<number>;
}

export function createOrderSuppliesModel(sequelize: Sequelize) {
    return OrderSupplies.init({}, {
        sequelize,
        tableName: "OrderSupplies",
        timestamps: false
    });
}
