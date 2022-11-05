import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order, OrderDetails } from '../interfaces/order.interface';

@Injectable()
export class OrdersApiService {

    constructor(private http: HttpClient) { }

    getAllOrders() {
        return this.http.get<Order[]>(`${environment.apiUrl}/orders`);
    }

    getOrderDetails(orderId: string) {
        return this.http.get<OrderDetails>(`${environment.apiUrl}/orders/${orderId}`);
    }
}
