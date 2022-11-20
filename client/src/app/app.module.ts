import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TUI_SVG_SRC_PROCESSOR } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';

import '@angular/common/locales/global/ru';
import { of } from "rxjs";
import { NotificationService } from "./services/notification.service";
import { OrderDetailsShellComponent } from './containers/order-details-shell/order-details-shell.component';
import { PublicCreateOrderShellComponent } from './containers/public-create-order-shell/public-create-order-shell.component';
import { SharedModule } from "./shared/shared.module";
import { OrderApiService } from "./services/order-api.service";

@NgModule({
    declarations: [
        AppComponent,
        OrderDetailsShellComponent,
        PublicCreateOrderShellComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        SharedModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'ru-RU' },
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
        {
            provide: TUI_LANGUAGE,
            useValue: of(TUI_RUSSIAN_LANGUAGE),
        },
        {
            provide: TUI_SVG_SRC_PROCESSOR,
            useFactory: () => {
                return (src: string): string => {
                    const myCustomPrefix = `ess::`;

                    return src.startsWith(myCustomPrefix)
                        ? `assets/icons/${src.replace(myCustomPrefix, ``)}.svg`
                        : src;
                };
            },
        },
        NotificationService,
        OrderApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
