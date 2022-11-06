import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ess-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
    @Output() logOut = new EventEmitter<void>();

    onLogOut() {
        this.logOut.emit();
    }
}
