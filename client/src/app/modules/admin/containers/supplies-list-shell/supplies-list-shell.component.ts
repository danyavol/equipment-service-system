import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { SuppliesApiService } from '../../services/supplies-api.service';

@UntilDestroy()
@Component({
    selector: 'ess-supplies-list-shell',
    templateUrl: './supplies-list-shell.component.html',
    styleUrls: ['./supplies-list-shell.component.scss']
})
export class SuppliesListShellComponent {
    isLoading = false;
    refreshSupplies = new BehaviorSubject<void>(undefined);

    supplies$ = this.refreshSupplies.pipe(
        tap(() => {
            this.isLoading = true;
        }),
        switchMap(() => this.apiService.getAllSupplies()),
        tap(() => {
            this.isLoading = false;
        })
    );

    constructor(
        private apiService: SuppliesApiService,
        private notification: NotificationService
    ) { }

    onDelete(id: string) {
        this.isLoading = true;
        this.apiService.deleteSupply(id).pipe(
            untilDestroyed(this)
        ).subscribe({
            next: () => {
                this.refreshSupplies.next();
                this.notification.success('Запас успешно удален');
            },
            error: () => {
                this.isLoading = false;
                this.notification.error('Не удалось удалить запас');
            }
        });
    }
}
