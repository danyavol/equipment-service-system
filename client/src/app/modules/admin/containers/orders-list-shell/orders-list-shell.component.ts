import { Component, OnInit } from '@angular/core';
import { OrdersApiService } from '../../services/orders-api.service';

@Component({
    selector: 'ess-orders-list-shell',
    templateUrl: './orders-list-shell.component.html',
    styleUrls: ['./orders-list-shell.component.scss']
})
export class OrdersListShellComponent implements OnInit {

    orders$ = this.apiService.getAllOrders();

    constructor(private apiService: OrdersApiService) { }

    ngOnInit(): void {
    }

}
