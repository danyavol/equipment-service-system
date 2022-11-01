import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute, Sequelize } from "sequelize";
import { OrderSupplies } from "./order-supply.model";


export class Supply extends Model<InferAttributes<Supply>, InferCreationAttributes<Supply>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare pieceCost: number;
    declare totalAmount: number;
    declare supplyDate: CreationOptional<Date>;

    declare ordersSupply?: NonAttribute<OrderSupplies>;
}

export function createSupplyModel(sequelize: Sequelize) {
    return Supply.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pieceCost: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        supplyDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: "supply",
        timestamps: false
    });
}
