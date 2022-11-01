import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute, Sequelize } from "sequelize";
import { OrderWork } from "./order-work.model";


export class Work extends Model<InferAttributes<Work>, InferCreationAttributes<Work>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare cost: number;

    declare ordersWork?: NonAttribute<OrderWork>;
}

export function createWorkModel(sequelize: Sequelize) {
    return Work.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cost: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: "work",
        timestamps: false
    });
}
