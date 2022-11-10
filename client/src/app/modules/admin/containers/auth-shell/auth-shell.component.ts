import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from '../../services/auth.service';

@UntilDestroy()
@Component({
    selector: 'ess-auth-shell',
    templateUrl: './auth-shell.component.html',
    styleUrls: ['./auth-shell.component.scss']
})
export class AuthShellComponent {

    form = this.fb.nonNullable.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    });

    isLoading = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private cdr: ChangeDetectorRef,
        private notification: NotificationService
    ) { }

    submit() {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        this.isLoading = true;
        this.authService.getToken(this.form.getRawValue()).pipe(
            untilDestroyed(this),
            finalize(() => {
                this.isLoading = false;
                this.cdr.detectChanges();
            })
        ).subscribe({
            next: () => {
                this.router.navigate(['admin']);
            },
            error: (err) => {
                if (err.status === 400) {
                    this.notification.error('Неверный логин или пароль');
                } else {
                    this.notification.error('Неизвестная ошибка');
                }
            }
        });
    }

}
