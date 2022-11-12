import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute, Order, Sequelize } from "sequelize";
import { OrderWork } from "./order-work.model";


export class Work extends Model<InferAttributes<Work>, InferCreationAttributes<Work>> {
    declare id: CreationOptional<string>;
    declare title: string;
    declare cost: number;
    declare updatedAt: CreationOptional<Date>;

    declare ordersWork?: NonAttribute<OrderWork>;
    declare orders?: NonAttribute<Order[]>;
}

export function createWorkModel(sequelize: Sequelize) {
    return Work.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cost: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        updatedAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: "work",
        createdAt: false
    });
}
