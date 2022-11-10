import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { BasicOrderFormConfig } from 'src/app/shared/components/basic-order-form/basic-order-form.config';
import { CreateOrderApiService } from './create-order-api.service';

@UntilDestroy()
@Component({
    selector: 'ess-create-order',
    templateUrl: './create-order.component.html',
    styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent {
    form = new FormGroup(new BasicOrderFormConfig());
    isLoading = false;

    constructor(
        private apiService: CreateOrderApiService,
        private cdr: ChangeDetectorRef,
        private notification: NotificationService
    ) {}

    submit() {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        this.isLoading = true;
        this.apiService.createOrder(this.form.getRawValue()).pipe(
            untilDestroyed(this),
            finalize(() => {
                this.isLoading = false;
                this.cdr.detectChanges();
            })
        ).subscribe({
            next: (orderId) => {
                this.form.reset();
                this.notification.success('Ваша заявка успешно сохранена');
                // TODO: Open order preview page
            },
            error: () => {
                this.notification.error('Не удалось создать заявку');
            },
        });
    }

}
