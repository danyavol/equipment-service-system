import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order.interface';
import { ColumnConfig } from 'src/app/shared/interfaces/table.interface';

@Component({
    selector: 'ess-orders-list-table',
    templateUrl: './orders-list-table.component.html',
    styleUrls: ['./orders-list-table.component.scss']
})
export class OrdersListTableComponent {
    @Input() orders: Order[] = [];

    readonly columns: ColumnConfig<Order>[] = [
        { columnName: 'status', title: 'Статус' },
        { columnName: 'clientName', title: 'Имя' },
        { columnName: 'phoneNumber', title: 'Телефон' },
        { columnName: 'email', title: 'Email' },
        { columnName: 'description', title: 'Описание' },
        { columnName: 'createdAt', title: 'Создано' },
        { columnName: 'updatedAt', title: 'Обновлено' },
        { columnName: 'actions', sorting: false },
    ];
}
