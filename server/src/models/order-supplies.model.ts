import { ForeignKey, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class OrderSupplies extends Model<InferAttributes<OrderSupplies>, InferCreationAttributes<OrderSupplies>> {
    declare OrderId: ForeignKey<string>;
    declare SupplyId: ForeignKey<number>;
}

export function createOrderSuppliesModel(sequelize: Sequelize) {
    return OrderSupplies.init({}, {
        sequelize,
        tableName: "OrderSupplies",
        timestamps: false
    });
}
