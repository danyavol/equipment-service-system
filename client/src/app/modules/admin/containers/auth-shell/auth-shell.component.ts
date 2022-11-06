import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

    submit() {
        this.form.markAllAsTouched();
        if (this.form.invalid) return;

        this.authService.getToken(this.form.getRawValue()).subscribe(() => {
            this.router.navigate(['admin']);
        });
    }

}
