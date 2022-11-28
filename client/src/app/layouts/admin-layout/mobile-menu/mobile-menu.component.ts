import { Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { menuConfig } from '../menu-config';

@Component({
    selector: 'ess-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
    menuConfig = menuConfig;

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>,
    ) {}

    close(): void {
        this.context.completeWith(false);
    }

    onLogOut() {
        this.context.completeWith(true);
    }
}
