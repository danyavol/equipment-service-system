import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, finalize, first, map, Observable, share, tap } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { OrderApiService } from 'src/app/services/order-api.service';
import { OrderFormConfig } from '../../components/order-form/order-form.config';
import { Supply } from '../../interfaces/supply.interface';
import { Work } from '../../interfaces/work.interface';
import { AdminOrdersApiService } from '../../services/admin-orders-api.service';
import { SuppliesApiService } from '../../services/supplies-api.service';
import { WorksApiService } from '../../services/works-api.service';

@UntilDestroy()
@Component({
  selector: 'ess-edit-order-shell',
  templateUrl: './edit-order-shell.component.html',
  styleUrls: ['./edit-order-shell.component.scss']
})
export class EditOrderShellComponent {
    orderForm = new FormGroup(new OrderFormConfig());
    orderId: string = this.route.snapshot.params['id'];
    orderData$: Observable<{
        supplies: Supply[],
        works: Work[]
    }>;
    isLoading = true;

    constructor(
        private suppliesApiService: SuppliesApiService,
        private worksApiService: WorksApiService,
        private adminOrdersApiService: AdminOrdersApiService,
        private ordersApiService: OrderApiService,
        private route: ActivatedRoute,
        private router: Router,
        private cdr: ChangeDetectorRef,
        private notification: NotificationService
    ) {
        this.loadOrder();

        this.orderData$ = combineLatest([
            this.suppliesApiService.getAvailableSupplies(),
            this.worksApiService.getAllWork()
        ]).pipe(
            map(([supplies, works]) => ({ supplies, works })),
            tap({
                error: () => {
                    this.notification.error('Не удалось загрузить доступные запасы или услуги');
                    this.router.navigate(['admin/orders']);
                }
            }),
            share()
        );
    }

    submit(): void {
        this.orderForm.markAllAsTouched();
        if (this.orderForm.invalid) return;

        this.isLoading = true;
        this.adminOrdersApiService.updateOrder(this.orderId, this.orderForm.getRawValue()).pipe(
            untilDestroyed(this),
            finalize(() => {
                this.isLoading = false;
                this.cdr.detectChanges();
            })
        ).subscribe({
            next: () => {
                this.router.navigate(['/admin/orders']);
                this.notification.success('Заявка успешно сохранен');
            },
            error: () => {
                this.notification.error('Произошла ошибка во время сохранения заявки');
            }
        });
    }

    private loadOrder(): void {
        this.ordersApiService.getOrderDetails(this.orderId).pipe(
            first(),
            untilDestroyed(this)
        ).subscribe({
            next: (order) => {
                this.isLoading = false;

                this.orderForm = new FormGroup(new OrderFormConfig({
                    clientName: order.clientName,
                    description: order.description,
                    email: order.email ?? undefined,
                    phoneNumber: order.phoneNumber,
                    status: order.status,
                    supplies: order.supplies,
                    works: order.works
                }));
            },
            error: () => {
                this.router.navigate(['/admin/supplies']);
                this.notification.error('Не удалось загрузить информацию о запасе');
            }
        });
    }
}
