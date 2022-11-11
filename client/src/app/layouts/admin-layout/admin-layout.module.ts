import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        HeaderComponent,
        AdminLayoutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
    ],
    exports: [
        AdminLayoutComponent
    ]
})
export class AdminLayoutModule { }
