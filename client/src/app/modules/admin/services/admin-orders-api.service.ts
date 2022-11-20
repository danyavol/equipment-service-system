import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class AdminOrdersApiService {

    constructor(private http: HttpClient) { }

    getAllOrders() {
        return this.http.get<Order[]>(`${environment.apiUrl}/orders`);
    }
}
