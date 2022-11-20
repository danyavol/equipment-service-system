import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { BasicOrderFormConfig } from 'src/app/shared/components/basic-order-form/basic-order-form.config';
import { OrderApiService } from '../../services/order-api.service';

@UntilDestroy()
@Component({
    selector: 'ess-public-create-order-shell',
    templateUrl: './public-create-order-shell.component.html',
    styleUrls: ['./public-create-order-shell.component.scss']
})
export class PublicCreateOrderShellComponent {
    form = new FormGroup(new BasicOrderFormConfig());
    isLoading = false;

    constructor(
        private apiService: OrderApiService,
        private cdr: ChangeDetectorRef,
        private notification: NotificationService,
        private router: Router
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
                this.router.navigate(['order', orderId]);
            },
            error: () => {
                this.notification.error('Не удалось создать заявку');
            },
        });
    }

}
