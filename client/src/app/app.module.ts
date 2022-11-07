import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateOrderModule } from './modules/create-order/create-order.module';

import '@angular/common/locales/global/ru';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CreateOrderModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'ru-RU' },
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
