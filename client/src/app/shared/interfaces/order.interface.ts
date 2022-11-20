import { OrderStatus } from "../constants/status.constant";

export interface Order {
    id: string,
    description: string,
    email: string | null,
    phoneNumber: string,
    clientName: string,
    status: OrderStatus,
    createdAt: string,
    updatedAt: string
}

export interface OrderDetails extends Order {
    works: {
        id: string;
        title: string;
        cost: number;
    }[];
    supplies: {
        id: string;
        title: string;
        pieceCost: number;
    }[];
}
