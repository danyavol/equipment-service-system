export interface Analytics {
    completedAmount: number;
    completedSum: number;
    canceledAmount: number;
    canceledPersentage: number;
    averageOrderPrice: number;
    activeOrdersAmount: ActiveOrdersAmount;
    ordersAmountPerPeriod: OrdersAmountPerPeriod ;
    ordersAmountInRange: OrderAmountInRange;
}

export interface OrderAmountInRange {
    lessThen50: number;
    from50to100: number;
    from100to200: number;
    greaterThen200: number;
}

export interface ActiveOrdersAmount {
    newOrders: number;
    readyForWork: number;
    inProcess: number;
    resolved: number;
}

export interface OrdersAmountPerPeriod {
    day: number;
    week: number;
    month: number;
}
