import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest, finalize, map, Observable, tap } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { OrderFormConfig } from '../../components/order-form/order-form.config';
import { Supply } from '../../interfaces/supply.interface';
import { Work } from '../../interfaces/work.interface';
import { AdminOrdersApiService } from '../../services/admin-orders-api.service';
import { SuppliesApiService } from '../../services/supplies-api.service';
import { WorksApiService } from '../../services/works-api.service';

@UntilDestroy()
@Component({
  selector: 'ess-create-order-shell',
  templateUrl: './create-order-shell.component.html',
  styleUrls: ['./create-order-shell.component.scss']
})
export class CreateOrderShellComponent {
    isLoading = false;
    form = new FormGroup(new OrderFormConfig());
    orderData$: Observable<{
        supplies: Supply[],
        works: Work[]
    }>;

    constructor(
        private suppliesApiService: SuppliesApiService,
        private worksApiService: WorksApiService,
        private adminOrdersApiService: AdminOrdersApiService,
        private notification: NotificationService,
        private router: Router,
        private cdr: ChangeDetectorRef
    ) {
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
            })
        );
    }

    submit(andExit: boolean = false) {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        this.isLoading = true;
        this.adminOrdersApiService.createOrder(this.form.getRawValue())
            .pipe(
                untilDestroyed(this),
                finalize(() => {
                    this.isLoading = false;
                    this.cdr.detectChanges();
                })
            )
            .subscribe({
                next: () => {
                    if (andExit) {
                        this.router.navigate(['/admin/orders']);
                    } else {
                        this.form.reset();
                    }
                    this.notification.success('Заявки успешно добавлена');
                },
                error: () => {
                    this.notification.error('Произошла ошибка во время создания заявки');
                }
            });
    }
}
