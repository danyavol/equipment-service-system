import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { statusName } from 'src/app/shared/constants/status.constant';
import { Order } from '../../interfaces/order.interface';

@Component({
    selector: 'ess-orders-list-table',
    templateUrl: './orders-list-table.component.html',
    styleUrls: ['./orders-list-table.component.scss']
})
export class OrdersListTableComponent {
    @Input() orders: Order[] = [];
    @Input() title: string = '';
    @Input() note: string | null = null;

    @Output() edit = new EventEmitter<string>();

    @ViewChild('defaultSorting') def: any;

    statusName = statusName;
    search = new FormControl('');

    filteredOrders$ = this.search.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((searchValue) => {
            return this.orders.filter(() => true); // TODO
        })
    );

    readonly columns = ['status', 'clientName', 'phoneNumber', 'email', 'description', 'createdAt', 'updatedAt', 'actions'];

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
