import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnConfig } from 'src/app/shared/interfaces/table.interface';
import { Order } from '../../interfaces/order.interface';

@Component({
    selector: 'ess-orders-list-table',
    templateUrl: './orders-list-table.component.html',
    styleUrls: ['./orders-list-table.component.scss']
})
export class OrdersListTableComponent {
    @Input() orders: Order[] = [];
    @Output() edit = new EventEmitter<string>();

    columns: ColumnConfig<Order>[] = [
        { columnName: 'status', title: 'Статус' },
        { columnName: 'clientName', title: 'Имя' },
        { columnName: 'phoneNumber', title: 'Телефон' },
        { columnName: 'email', title: 'Email' },
        { columnName: 'description', title: 'Описание' },
        { columnName: 'createdAt', title: 'Создано' },
        { columnName: 'updatedAt', title: 'Обновлено' },
        { columnName: 'actions', title: '', sorting: false },
    ];

    onEdit(order: Order) {
        this.edit.emit(order.id);
    }
}
