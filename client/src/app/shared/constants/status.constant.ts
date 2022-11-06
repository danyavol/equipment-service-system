export enum OrderStatus {
    New = "new",
    Cancel = "cancel",
    ReadyForWork = "readyForWork",
    InProcess = "inProcess",
    Resolved = "resolved",
    Done = "done"
}

export const statusName: { [key in OrderStatus]: string } = {
    [OrderStatus.New]: "Новый",
    [OrderStatus.Cancel]: "Отменен",
    [OrderStatus.ReadyForWork]: "Готов к работе",
    [OrderStatus.InProcess]: "В работе",
    [OrderStatus.Resolved]: "Готов к выдаче",
    [OrderStatus.Done]: "Выполнен",
}
