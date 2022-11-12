export interface Work {
    id: string;
    title: string;
    cost: number;
    orders: {
        id: string;
    }[],
    updatedAt: string;
}
