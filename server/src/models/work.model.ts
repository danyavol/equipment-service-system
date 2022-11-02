import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute, Sequelize } from "sequelize";
import { OrderWork } from "./order-work.model";


export class Work extends Model<InferAttributes<Work>, InferCreationAttributes<Work>> {
    declare id: CreationOptional<string>;
    declare title: string;
    declare cost: number;

    declare ordersWork?: NonAttribute<OrderWork>;
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
        }
    }, {
        sequelize,
        modelName: "work",
        timestamps: false
    });
}
