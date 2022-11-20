import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, Resolve, Router
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { OrderApiService } from '../services/order-api.service';
import { OrderDetails } from '../shared/interfaces/order.interface';

@Injectable({
    providedIn: 'root'
})
export class OrderResolver implements Resolve<OrderDetails | null> {
    constructor(
        private apiService: OrderApiService,
        private router: Router,
        private notification: NotificationService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<OrderDetails | null> {
        const orderId = route.paramMap.get('orderId') ?? '';

        return this.apiService.getOrderDetails(orderId).pipe(
            catchError(() => {
                this.router.navigate(['']);
                this.notification.error('Не удалось загрузить детали заказа');
                return of(null);
            })
        );
    }
}
