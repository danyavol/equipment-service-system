import { db } from "@models/index";

export async function insertSupplies() {
    await db.Supplies.bulkCreate([
        {
            id: 1,
            title: "Экрана телефона Samsung Galaxy",
            pieceCost: 60,
            totalAmount: 1,
        },
        {
            id: 2,
            title: "Лицензионный ключ Windows",
            pieceCost: 30,
            totalAmount: 10,
        },
        {
            id: 3,
            title: "Аккумулятор телефона 4000mAh",
            pieceCost: 40,
            totalAmount: 3,
        },
    ]);
}
