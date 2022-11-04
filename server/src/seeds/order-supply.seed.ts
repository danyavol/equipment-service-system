import { db } from "@models/index";

export async function insertOrdersSupplies() {
    await db.OrderSupplies.bulkCreate([
        {
            orderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            supplyId: "3b8a64e4-0e42-4fef-a8e0-6fc39f40668e"
        },
        {
            orderId: "eba7aa7d-acb3-4cf1-9c63-ef0d16ed98ab",
            supplyId: "fa0b7564-beb0-49d7-972f-3a4a7fafd0e0"
        },
    ]);
}
