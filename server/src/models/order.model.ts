import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute, Sequelize } from "sequelize";
import { Supply } from "./supply.model";
import { Work } from "./work.model";

export enum Status {
    New = "new",
    Cancel = "cancel",
    ReadyForWork = "readyForWork",
    InProcess = "inProcess",
    Resolved = "resolved",
    Done = "done"
}

export class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    declare id: CreationOptional<string>;
    declare description: string;
    declare email: string | null;
    declare phoneNumber: string;
    declare clientName: string;
    declare status: Status;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;

    declare works?: NonAttribute<Work[]>;
    declare supplies?: NonAttribute<Supply[]>;
}

export function createOrderModel(sequelize: Sequelize) {
    return Order.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING(512),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        clientName: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM,
            values: Object.values(Status),
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: "order"
    });
}