import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, startWith } from 'rxjs';
import { OrderStatus } from 'src/app/shared/constants/status.constant';
import { AdminOrdersApiService } from '../../services/admin-orders-api.service';

@Component({
    selector: 'ess-orders-list-shell',
    templateUrl: './orders-list-shell.component.html',
    styleUrls: ['./orders-list-shell.component.scss']
})
export class OrdersListShellComponent {
    orders$ = this.apiService.getAllOrders();

    readonly activeStatuses = [OrderStatus.New, OrderStatus.ReadyForWork, OrderStatus.InProcess, OrderStatus.Resolved];
    onlyActiveControl = new FormControl(true, { nonNullable: true });

    filteredOrders$ = combineLatest([
        this.orders$,
        this.onlyActiveControl.valueChanges.pipe(startWith(this.onlyActiveControl.value))
    ]).pipe(
        map(([orders, onlyActive]) => {
            if (!onlyActive) return orders;
            else return orders.filter(order => this.activeStatuses.includes(order.status));
        })
    );

    constructor(private apiService: AdminOrdersApiService) { }
}
