export enum OrderStatus {
    New = "new",
    ReadyForWork = "readyForWork",
    InProcess = "inProcess",
    Resolved = "resolved",
    Done = "done"
}

export const statusName: { [key in OrderStatus]: string } = {
    [OrderStatus.New]: "Новый",
    [OrderStatus.ReadyForWork]: "Готов к работе",
    [OrderStatus.InProcess]: "В работе",
    [OrderStatus.Resolved]: "Готов к выдаче",
    [OrderStatus.Done]: "Выполнен",
}
