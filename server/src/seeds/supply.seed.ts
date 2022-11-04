import { db } from "@models/index";

export async function insertSupplies() {
    await db.Supplies.bulkCreate([
        {
            id: "10ab9552-bc29-4212-b67f-e58e093fd663",
            title: "Экрана телефона Samsung Galaxy",
            pieceCost: 60,
            totalAmount: 1,
        },
        {
            id: "3b8a64e4-0e42-4fef-a8e0-6fc39f40668e",
            title: "Лицензионный ключ Windows",
            pieceCost: 30,
            totalAmount: 10,
        },
        {
            id: "fa0b7564-beb0-49d7-972f-3a4a7fafd0e0",
            title: "Аккумулятор телефона 4000mAh",
            pieceCost: 40,
            totalAmount: 1,
        },
        {
            id: "6b1bd5f5-a16e-4917-80e6-fdee7e67afb9",
            title: "Аккумулятор телефона 3500mAh",
            pieceCost: 35,
            totalAmount: 5,
        },
    ]);
}
