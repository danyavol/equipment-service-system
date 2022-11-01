import { db } from "@models/index";

export async function insertOrdersWorks() {
    await db.OrderWork.bulkCreate([
        {
            orderId: "e50b0a5f-33dd-4f44-b556-41f2e19baa2e",
            workId: 5
        },
        {
            orderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            workId: 2
        },
        {
            orderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            workId: 4
        },
        {
            orderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            workId: 1
        },
        {
            orderId: "eba7aa7d-acb3-4cf1-9c63-ef0d16ed98ab",
            workId: 6
        },
    ]);
}
