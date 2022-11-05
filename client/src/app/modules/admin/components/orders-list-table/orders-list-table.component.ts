import { Component, EventEmitter, Input, Output } from '@angular/core';
import { statusName } from 'src/app/shared/constants/status.constant';
import { Order } from '../../interfaces/order.interface';

@Component({
    selector: 'ess-orders-list-table',
    templateUrl: './orders-list-table.component.html',
    styleUrls: ['./orders-list-table.component.scss']
})
export class OrdersListTableComponent {
    @Input() orders: Order[] = [];
    @Output() edit = new EventEmitter<string>();

    statusName = statusName;

    cols: { field: keyof Order, header: string }[] = [
        { field: 'status', header: 'Статус' },
        { field: 'clientName', header: 'Имя' },
        { field: 'phoneNumber', header: 'Телефон' },
        { field: 'email', header: 'Email' },
        { field: 'description', header: 'Описание' },
        { field: 'createdAt', header: 'Создано' },
    ];

    orderType(order: Order) {
        return order;
    }

    onEdit(order: Order) {
        this.edit.emit(order.id);
    }
}
