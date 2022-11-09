import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ess-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() logOut = new EventEmitter<void>();

    activeItemIndex: number;
    tabs = [
        {
            label: "Заявки",
            icon: "ess::topic",
            routerLink: "/admin/orders",
        },
        {
            label: "Запасы",
            icon: "ess::inventory",
            routerLink: "/admin/supplies",
        },
        {
            label: "Услуги",
            icon: "ess::cases",
            routerLink: "/admin/work",
        }
    ];

    constructor(router: Router) {
        this.activeItemIndex = this.tabs.findIndex(tab => tab.routerLink.startsWith(router.url)) ?? 0;
    }

    onLogOut() {
        this.logOut.emit();
    }
}
