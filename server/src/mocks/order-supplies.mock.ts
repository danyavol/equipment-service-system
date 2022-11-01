import { db } from "@models/index";

export async function insertOrderSupplies() {
    await db.OrderSupplies.bulkCreate([
        {
            OrderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            SupplyId: 2
        },
        {
            OrderId: "eba7aa7d-acb3-4cf1-9c63-ef0d16ed98ab",
            SupplyId: 3
        },
    ]);
}
