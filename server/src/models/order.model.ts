import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export enum Status {
    New = "new",
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
        tableName: "Orders"
    });
}