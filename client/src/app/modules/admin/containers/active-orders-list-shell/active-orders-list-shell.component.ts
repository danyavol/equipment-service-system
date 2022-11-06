import { Component } from '@angular/core';
import { map } from 'rxjs';
import { OrderStatus } from 'src/app/shared/constants/status.constant';
import { OrdersApiService } from '../../services/orders-api.service';



@Component({
    selector: 'ess-active-orders-list-shell',
    templateUrl: './active-orders-list-shell.component.html',
    styleUrls: ['./active-orders-list-shell.component.scss']
})
export class ActiveOrdersListShellComponent {

    activeStatuses = [OrderStatus.New, OrderStatus.ReadyForWork, OrderStatus.InProcess, OrderStatus.Resolved];

    orders$ = this.apiService.getAllOrders().pipe(
        map(orders => {
            return orders.filter(order => this.activeStatuses.includes(order.status));
        })
    );

    constructor(private apiService: OrdersApiService) { }
}
