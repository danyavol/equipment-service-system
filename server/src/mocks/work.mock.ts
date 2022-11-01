import { db } from "@models/index";

export async function insertWorks() {
    await db.Work.bulkCreate([
        {
            id: 1,
            title: "Переустановка OC Windows",
            cost: 20
        },
        {
            id: 2,
            title: "Сборка и разборка ноутбука",
            cost: 15
        },
        {
            id: 3,
            title: "Замена экрана смартфона",
            cost: 40
        },
        {
            id: 4,
            title: "Ремонт электроники 2 категории",
            cost: 40
        },
        {
            id: 5,
            title: "Ремонт электроники 1 категории",
            cost: 50
        },
        {
            id: 6,
            title: "Сборка и разборка смартфона",
            cost: 25
        },
    ]);
}
