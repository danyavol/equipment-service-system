import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, first, tap } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { WorkFormConfig } from '../../components/work-form/work-form.config';
import { WorksApiService } from '../../services/works-api.service';

@UntilDestroy()
@Component({
  selector: 'ess-edit-work-shell',
  templateUrl: './edit-work-shell.component.html',
  styleUrls: ['./edit-work-shell.component.scss']
})
export class EditWorkShellComponent {
    workForm = new FormGroup(new WorkFormConfig());
    workId: string = this.route.snapshot.params['id'];
    isLoading = true;

    constructor(
        private apiService: WorksApiService,
        private route: ActivatedRoute,
        private router: Router,
        private cdr: ChangeDetectorRef,
        private notification: NotificationService
    ) {
        this.loadWork();
    }

    submit(): void {
        this.workForm.markAllAsTouched();
        if (this.workForm.invalid) return;

        this.isLoading = true;
        this.apiService.updateWork(this.workId, this.workForm.getRawValue()).pipe(
            untilDestroyed(this),
            finalize(() => {
                this.isLoading = false;
                this.cdr.detectChanges();
            })
        ).subscribe({
            next: () => {
                this.router.navigate(['/admin/work']);
                this.notification.success('Услуга успешно сохранена');
            },
            error: () => {
                this.notification.error('Произошла ошибка во время сохранения услуги');
            }
        });
    }

    private loadWork(): void {
        this.apiService.getWork(this.workId).pipe(
            first(),
            untilDestroyed(this),
            tap({
                next: work => {
                    this.isLoading = false;

                    this.workForm = new FormGroup(new WorkFormConfig({
                        title: work.title,
                        cost: work.cost
                    }));
                },
                error: () => {
                    this.router.navigate(['/admin/work']);
                    this.notification.error('Не удалось загрузить информацию об услуге');
                }
            })
        ).subscribe();
    }
}
