import { db } from "@models/index";

export async function insertOrderWork() {
    await db.OrderWork.bulkCreate([
        {
            OrderId: "e50b0a5f-33dd-4f44-b556-41f2e19baa2e",
            WorkId: 5
        },
        {
            OrderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            WorkId: 2
        },
        {
            OrderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            WorkId: 4
        },
        {
            OrderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            WorkId: 1
        },
        {
            OrderId: "eba7aa7d-acb3-4cf1-9c63-ef0d16ed98ab",
            WorkId: 6
        },
    ]);
}
