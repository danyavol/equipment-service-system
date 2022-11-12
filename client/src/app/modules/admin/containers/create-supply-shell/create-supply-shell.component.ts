import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { SupplyFormConfig } from '../../components/supply-form/supply-form.config';
import { SuppliesApiService } from '../../services/supplies-api.service';

@UntilDestroy()
@Component({
    selector: 'ess-create-supply-shell',
    templateUrl: './create-supply-shell.component.html',
    styleUrls: ['./create-supply-shell.component.scss']
})
export class CreateSupplyShellComponent {

    supplyForm = new FormGroup(new SupplyFormConfig());
    isLoading = false;

    constructor(
        private apiService: SuppliesApiService,
        private cdr: ChangeDetectorRef,
        private router: Router,
        private notification: NotificationService
    ) { }

    submit(andExit: boolean = false){
        this.supplyForm.markAllAsTouched();
        if (this.supplyForm.invalid) return;

        this.isLoading = true;
        this.apiService.createSupply(this.supplyForm.getRawValue())
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
                        this.router.navigate(['/admin/supplies']);
                    } else {
                        this.supplyForm.reset();
                    }
                    this.notification.success('Запас успешно добавлен');
                },
                error: () => {
                    this.notification.error('Произошла ошибка во время добавления запаса');
                }
            });
    }
}
