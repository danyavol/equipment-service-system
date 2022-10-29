import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";


export class Supply extends Model<InferAttributes<Supply>, InferCreationAttributes<Supply>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare pieceCost: number;
    declare totalAmount: number;
    declare supplyDate: CreationOptional<Date>;
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
        tableName: "Supplies",
        timestamps: false
    });
}
