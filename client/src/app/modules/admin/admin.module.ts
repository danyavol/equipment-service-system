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
import { AuthShellComponent } from './containers/auth-shell/auth-shell.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CreateSupplyShellComponent } from './containers/create-supply-shell/create-supply-shell.component';
import { SupplyFormComponent } from './components/supply-form/supply-form.component';



@NgModule({
    declarations: [
        AdminComponent,
        OrdersListShellComponent,
        OrdersListTableComponent,
        ActiveOrdersListShellComponent,
        SuppliesListShellComponent,
        SuppliesListTableComponent,
        WorkListShellComponent,
        WorkListTableComponent,
        AuthShellComponent,
        CreateSupplyShellComponent,
        SupplyFormComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AdminRoutingModule,
        HttpClientModule,
        AdminLayoutModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        AuthService,
        OrdersApiService,
        SuppliesApiService,
        WorksApiService,

    ]
})
export class AdminModule { }
