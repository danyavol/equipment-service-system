import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { WorkFormConfig } from '../../components/work-form/work-form.config';
import { WorksApiService } from '../../services/works-api.service';

@UntilDestroy()
@Component({
    selector: 'ess-create-work-shell',
    templateUrl: './create-work-shell.component.html',
    styleUrls: ['./create-work-shell.component.scss']
})
export class CreateWorkShellComponent {

    workForm = new FormGroup(new WorkFormConfig());
    isLoading = false;

    constructor(
        private apiService: WorksApiService,
        private cdr: ChangeDetectorRef,
        private router: Router,
        private notification: NotificationService
    ) { }

    submit(andExit: boolean = false){
        this.workForm.markAllAsTouched();
        if (this.workForm.invalid) return;

        this.isLoading = true;
        this.apiService.createWork(this.workForm.getRawValue())
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
                        this.router.navigate(['/admin/work']);
                    } else {
                        this.workForm.reset();
                    }
                    this.notification.success('Услуга успешно добавлена');
                },
                error: () => {
                    this.notification.error('Произошла ошибка во время добавления услуги');
                }
            });
    }
}
