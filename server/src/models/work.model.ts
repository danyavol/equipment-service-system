import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";


export class Work extends Model<InferAttributes<Work>, InferCreationAttributes<Work>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare cost: number;
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
        tableName: "Work",
        timestamps: false
    });
}
