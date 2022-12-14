import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminLayoutModule } from 'src/app/layouts/admin-layout/admin-layout.module';
import { AdminRoutingModule } from './admin-routing.module';
import { OrdersListShellComponent } from './containers/orders-list-shell/orders-list-shell.component';
import { AdminOrdersApiService } from './services/admin-orders-api.service';
import { OrdersListTableComponent } from './components/orders-list-table/orders-list-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
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
import { CreateOrderShellComponent } from './containers/create-order-shell/create-order-shell.component';
import { CreateWorkShellComponent } from './containers/create-work-shell/create-work-shell.component';
import { EditSupplyShellComponent } from './containers/edit-supply-shell/edit-supply-shell.component';
import { WorkFormComponent } from './components/work-form/work-form.component';
import { EditWorkShellComponent } from './containers/edit-work-shell/edit-work-shell.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { EditOrderShellComponent } from './containers/edit-order-shell/edit-order-shell.component';
import { AnalyticsShellComponent } from './containers/analytics-shell/analytics-shell.component';
import { AnalyticsService } from './services/analytics.service';
import { OrdersAmountInRangeComponent } from './components/analytics/orders-amount-in-range/orders-amount-in-range.component';
import { ActiveOrdersAmountComponent } from './components/analytics/active-orders-amount/active-orders-amount.component';
import { OrdersAmountPerPeriodComponent } from './components/analytics/orders-amount-per-period/orders-amount-per-period.component';
import { InfoCardComponent } from './components/analytics/info-card/info-card.component';


@NgModule({
    declarations: [
        AdminComponent,
        OrdersListShellComponent,
        OrdersListTableComponent,
        SuppliesListShellComponent,
        SuppliesListTableComponent,
        WorkListShellComponent,
        WorkListTableComponent,
        AuthShellComponent,
        CreateSupplyShellComponent,
        SupplyFormComponent,
        CreateOrderShellComponent,
        CreateWorkShellComponent,
        EditSupplyShellComponent,
        WorkFormComponent,
        EditWorkShellComponent,
        OrderFormComponent,
        EditOrderShellComponent,
        AnalyticsShellComponent,
        OrdersAmountInRangeComponent,
        ActiveOrdersAmountComponent,
        OrdersAmountPerPeriodComponent,
        InfoCardComponent
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
        AdminOrdersApiService,
        SuppliesApiService,
        WorksApiService,
        AnalyticsService,
    ]
})
export class AdminModule { }
