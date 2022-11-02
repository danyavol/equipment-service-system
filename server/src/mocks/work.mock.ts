import { db } from "@models/index";

export async function insertWorks() {
    await db.Work.bulkCreate([
        {
            id: "509f2d30-61e0-4fc8-9017-33b7cb49a906",
            title: "Переустановка OC Windows",
            cost: 20
        },
        {
            id: "ccafeeda-cd9d-46df-99f3-f5c28149d876",
            title: "Сборка и разборка ноутбука",
            cost: 15
        },
        {
            id: "33347596-6f9a-4376-886e-1b76757ec2d5",
            title: "Замена экрана смартфона",
            cost: 40
        },
        {
            id: "fcaa98f8-1d5e-4048-9014-44c96977ded2",
            title: "Ремонт электроники 2 категории",
            cost: 40
        },
        {
            id: "a28be35f-50ce-4cbb-8eca-24d5e9758ca3",
            title: "Ремонт электроники 1 категории",
            cost: 50
        },
        {
            id: "3368e361-44db-42a5-a7c6-8fb32230b305",
            title: "Сборка и разборка смартфона",
            cost: 25
        },
    ]);
}
