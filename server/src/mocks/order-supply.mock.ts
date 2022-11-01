import { db } from "@models/index";

export async function insertOrdersSupplies() {
    await db.OrderSupplies.bulkCreate([
        {
            orderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            supplyId: 2
        },
        {
            orderId: "eba7aa7d-acb3-4cf1-9c63-ef0d16ed98ab",
            supplyId: 3
        },
    ]);
}
