import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'ess-admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent {
    constructor(private authService: AuthService, private router: Router) {}

    onLogOut() {
        this.authService.logOut();
        this.router.navigate(['admin']);
    }
}
