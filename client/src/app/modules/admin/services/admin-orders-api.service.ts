import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroupRawValue } from 'src/app/shared/form.interface';
import { Order } from 'src/app/shared/interfaces/order.interface';
import { environment } from 'src/environments/environment';
import { OrderFormConfig } from '../components/order-form/order-form.config';
import { AdminOrderForRequest } from '../interfaces/order.interface';

@Injectable()
export class AdminOrdersApiService {

    constructor(private http: HttpClient) { }

    getAllOrders() {
        return this.http.get<Order[]>(`${environment.apiUrl}/orders`);
    }

    createOrder(data: FormGroupRawValue<OrderFormConfig>) {
        const dataForRequest = this.getOrderForRequest(data);
        return this.http.post(`${environment.apiUrl}/orders/admin`, dataForRequest);
    }

    updateOrder(id: string, data: FormGroupRawValue<OrderFormConfig>) {
        const dataForRequest = this.getOrderForRequest(data);
        return this.http.put(`${environment.apiUrl}/orders/admin/${id}`, dataForRequest);
    }

    private getOrderForRequest(formValue: FormGroupRawValue<OrderFormConfig>): AdminOrderForRequest {
        return {
            clientName: formValue.clientName,
            description: formValue.description,
            email: formValue.email,
            phoneNumber: formValue.phoneNumber,
            status: formValue.status,
            supplies: formValue.supplies.map(supply => supply.id),
            works: formValue.works.map(work => work.id)
        };
    }
}
