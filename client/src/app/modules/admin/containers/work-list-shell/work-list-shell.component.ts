import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { WorksApiService } from '../../services/works-api.service';

@UntilDestroy()
@Component({
    selector: 'ess-work-list-shell',
    templateUrl: './work-list-shell.component.html',
    styleUrls: ['./work-list-shell.component.scss']
})
export class WorkListShellComponent {
    isLoading = false;
    refreshWork = new BehaviorSubject<void>(undefined);

    work$ = this.refreshWork.pipe(
        tap(() => {
            this.isLoading = true;
        }),
        switchMap(() => this.apiService.getAllWork()),
        tap(() => {
            this.isLoading = false;
        })
    );

    constructor(
        private apiService: WorksApiService,
        private notification: NotificationService
    ) { }

    onDelete(id: string) {
        this.isLoading = true;
        this.apiService.deleteWork(id).pipe(
            untilDestroyed(this)
        ).subscribe({
            next: () => {
                this.refreshWork.next();
                this.notification.success('Услуга успешно удалена');
            },
            error: () => {
                this.isLoading = false;
                this.notification.error('Не удалось удалить услугу');
            }
        });
    }
}
