import { db } from "@models/index";

export async function insertOrdersWorks() {
    await db.OrderWork.bulkCreate([
        {
            orderId: "e50b0a5f-33dd-4f44-b556-41f2e19baa2e",
            workId: "a28be35f-50ce-4cbb-8eca-24d5e9758ca3"
        },
        {
            orderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            workId: "ccafeeda-cd9d-46df-99f3-f5c28149d876"
        },
        {
            orderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            workId: "fcaa98f8-1d5e-4048-9014-44c96977ded2"
        },
        {
            orderId: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            workId: "509f2d30-61e0-4fc8-9017-33b7cb49a906"
        },
        {
            orderId: "eba7aa7d-acb3-4cf1-9c63-ef0d16ed98ab",
            workId: "3368e361-44db-42a5-a7c6-8fb32230b305"
        },
    ]);
}
