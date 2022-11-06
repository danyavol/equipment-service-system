import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminLayoutModule } from 'src/app/layouts/admin-layout/admin-layout.module';
import { AdminRoutingModule } from './admin-routing.module';
import { OrdersListShellComponent } from './containers/orders-list-shell/orders-list-shell.component';
import { OrdersApiService } from './services/orders-api.service';
import { OrdersListTableComponent } from './components/orders-list-table/orders-list-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActiveOrdersListShellComponent } from './containers/active-orders-list-shell/active-orders-list-shell.component';
import { SuppliesListShellComponent } from './containers/supplies-list-shell/supplies-list-shell.component';
import { SuppliesApiService } from './services/supplies-api.service';
import { SuppliesListTableComponent } from './components/supplies-list-table/supplies-list-table.component';
import { WorksApiService } from './services/works-api.service';
import { WorkListShellComponent } from './containers/work-list-shell/work-list-shell.component';
import { WorkListTableComponent } from './components/work-list-table/work-list-table.component';



@NgModule({
    declarations: [
        AdminComponent,
        OrdersListShellComponent,
        OrdersListTableComponent,
        ActiveOrdersListShellComponent,
        SuppliesListShellComponent,
        SuppliesListTableComponent,
        WorkListShellComponent,
        WorkListTableComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AdminRoutingModule,
        AdminLayoutModule
    ],
    providers: [
        OrdersApiService,
        SuppliesApiService,
        WorksApiService
    ]
})
export class AdminModule { }
