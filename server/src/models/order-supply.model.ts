import { ForeignKey, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class OrderSupplies extends Model<InferAttributes<OrderSupplies>, InferCreationAttributes<OrderSupplies>> {
    declare orderId: ForeignKey<string>;
    declare supplyId: ForeignKey<string>;
}

export function createOrderSuppliesModel(sequelize: Sequelize) {
    return OrderSupplies.init({}, {
        sequelize,
        modelName: "ordersSupply",
        timestamps: false
    });
}
