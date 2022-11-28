import { Component, EventEmitter, Inject, Injector, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TuiDialogService } from '@taiga-ui/core';
import { menuConfig } from '../menu-config';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@UntilDestroy()
@Component({
    selector: 'ess-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() logOut = new EventEmitter<void>();

    activeItemIndex: number = -1;

    readonly tabs = menuConfig;

    constructor(
        router: Router,
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
    ) {
        this.setActiveItemIndex(router.url);

        router.events.pipe(untilDestroyed(this)).subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.setActiveItemIndex(event.urlAfterRedirects);
            }
        });
    }

    openMobileMenu(): void {
        this.dialogService
            .open(
                new PolymorpheusComponent(MobileMenuComponent, this.injector),
                {
                    size: `page`,
                    closeable: true,
                    dismissible: true,
                },
            )
            .subscribe();
    }

    onLogOut() {
        this.logOut.emit();
    }

    private setActiveItemIndex(currentUrl: string): void {
        this.activeItemIndex = this.tabs.findIndex(tab => this.isLinkActive(currentUrl, tab.routerLink));
    }

    private isLinkActive(currentUrl: string, link: string): boolean {
        return currentUrl.startsWith(link); // TODO: Fix this method
    }
}
