import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminLayoutModule } from 'src/app/layouts/admin-layout/admin-layout.module';
import { AdminRoutingModule } from './admin-routing.module';
import { OrdersListShellComponent } from './containers/orders-list-shell/orders-list-shell.component';



@NgModule({
    declarations: [
        AdminComponent,
        OrdersListShellComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        AdminLayoutModule
    ]
})
export class AdminModule { }
