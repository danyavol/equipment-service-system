import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'ess-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() logOut = new EventEmitter<void>();

    activeItemIndex: number = -1;

    readonly tabs = [
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
        this.setActiveItemIndex(router.url);

        router.events.pipe(untilDestroyed(this)).subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.setActiveItemIndex(event.urlAfterRedirects);
            }
        });
    }

    onLogOut() {
        this.logOut.emit();
    }

    private setActiveItemIndex(currentUrl: string): void {
        this.activeItemIndex = this.tabs.findIndex(tab => this.isLinkActive(currentUrl, tab.routerLink));
    }

    private isLinkActive(currentUrl: string, link: string): boolean {
        return currentUrl.startsWith(link);
    }
}
