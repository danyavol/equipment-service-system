import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        HeaderComponent,
        AdminLayoutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MenubarModule
    ],
    exports: [
        AdminLayoutComponent
    ]
})
export class AdminLayoutModule { }
