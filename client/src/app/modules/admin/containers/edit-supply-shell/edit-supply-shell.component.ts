import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, first, tap } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { SupplyFormConfig } from '../../components/supply-form/supply-form.config';
import { SuppliesApiService } from '../../services/supplies-api.service';

@UntilDestroy()
@Component({
    selector: 'ess-edit-supply-shell',
    templateUrl: './edit-supply-shell.component.html',
    styleUrls: ['./edit-supply-shell.component.scss']
})
export class EditSupplyShellComponent {
    supplyForm = new FormGroup(new SupplyFormConfig());
    supplyId: string = this.route.snapshot.params['id'];
    isLoading = true;

    constructor(
        private apiService: SuppliesApiService,
        private route: ActivatedRoute,
        private router: Router,
        private cdr: ChangeDetectorRef,
        private notification: NotificationService
    ) {
        this.loadSupply();
    }

    submit(): void {
        this.supplyForm.markAllAsTouched();
        if (this.supplyForm.invalid) return;

        this.isLoading = true;
        this.apiService.updateSupply(this.supplyId, this.supplyForm.getRawValue()).pipe(
            untilDestroyed(this),
            finalize(() => {
                this.isLoading = false;
                this.cdr.detectChanges();
            })
        ).subscribe({
            next: () => {
                this.router.navigate(['/admin/supplies']);
                this.notification.success('Запас успешно сохранен');
            },
            error: () => {
                this.notification.error('Произошла ошибка во время сохранения запаса');
            }
        });
    }

    private loadSupply(): void {
        this.apiService.getSupply(this.supplyId).pipe(
            first(),
            untilDestroyed(this),
            tap({
                next: supply => {
                    this.isLoading = false;

                    this.supplyForm = new FormGroup(new SupplyFormConfig({
                        pieceCost: supply.pieceCost,
                        title: supply.title,
                        totalAmount: supply.totalAmount
                    }));

                    // Not to delete already used supplies
                    this.supplyForm.controls.totalAmount.addValidators(Validators.min(supply.totalAmount - supply.availableAmount));
                },
                error: () => {
                    this.router.navigate(['/admin/supplies']);
                    this.notification.error('Не удалось загрузить информацию о запасе');
                }
            })
        ).subscribe();
    }

}
