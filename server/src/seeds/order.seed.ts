import { db } from "@models/index";
import { Status } from "@models/order.model";

export async function insertOrders() {
    await db.Orders.bulkCreate([
        {
            id: "c8437523-fbba-4d84-a2cb-4f83bc8d43d5",
            clientName: "Василий",
            phoneNumber: "+375291234567",
            status: Status.New,
            description: "Необходимо переустановить виндовс на моем макбуке",
        },
        {
            id: "63f9d25a-082c-4461-a10c-eb308756aae6",
            clientName: "Никита",
            phoneNumber: "+375331234567",
            email: "nick99@gmail.com",
            status: Status.ReadyForWork,
            description: "Чистка компьютера"
        },
        {
            clientName: "Вася",
            phoneNumber: "+375299999999",
            status: Status.Cancel,
            description: "Хочу пиццу",
        },
        {
            id: "483cbee2-0748-46b1-ab08-2e726241f339",
            clientName: "Ярослав",
            phoneNumber: "+375299994567",
            email: "yar@mail.ru",
            status: Status.InProcess,
            description: "Замена стекла телефона Samsung Galaxy",
        },
        {
            id: "6e15d4c0-57a3-4f83-a563-6f3b8b9a2189",
            clientName: "Александр",
            phoneNumber: "+375295555555",
            status: Status.InProcess,
            description: "Переустановка Windows 10",
        },
        {
            id: "e50b0a5f-33dd-4f44-b556-41f2e19baa2e",
            clientName: "Дмитрий",
            phoneNumber: "+375291267567",
            status: Status.Resolved,
            description: "Перестал работать один наушник"
        },
        {
            id: "23735fc2-750c-4334-a2e1-68e9c0e6da85",
            clientName: "Александр",
            phoneNumber: "+375295534567",
            email: "alexander.er@mail.ru",
            status: Status.Done,
            description: "Не запускается ноутбук lenovo"
        },
        {
            id: "eba7aa7d-acb3-4cf1-9c63-ef0d16ed98ab",
            clientName: "Владислав",
            phoneNumber: "+375291234500",
            status: Status.Done,
            description: "Замена аккумулятора телефона"
        },
    ]);
}
