import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthShellComponent } from './containers/auth-shell/auth-shell.component';
import { CreateOrderShellComponent } from './containers/create-order-shell/create-order-shell.component';
import { CreateSupplyShellComponent } from './containers/create-supply-shell/create-supply-shell.component';
import { CreateWorkShellComponent } from './containers/create-work-shell/create-work-shell.component';
import { EditSupplyComponent } from './containers/edit-supply/edit-supply.component';
import { OrdersListShellComponent } from './containers/orders-list-shell/orders-list-shell.component';
import { SuppliesListShellComponent } from './containers/supplies-list-shell/supplies-list-shell.component';
import { WorkListShellComponent } from './containers/work-list-shell/work-list-shell.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        canMatch: [() => inject(AuthService).isAuthorized],
        children: [
            {
                path: "orders",
                component: OrdersListShellComponent
            },
            {
                path: "new-order",
                component: CreateOrderShellComponent
            },

            {
                path: "supplies",
                component: SuppliesListShellComponent
            },
            {
                path: "new-supply",
                component: CreateSupplyShellComponent
            },
            {
                path: "supply/:id",
                component: EditSupplyComponent
            },

            {
                path: "work",
                component: WorkListShellComponent
            },
            {
                path: "new-work",
                component: CreateWorkShellComponent
            },

            { path: "**", redirectTo: "orders" }
        ]
    },
    {
        path: "auth",
        canMatch: [() => !inject(AuthService).isAuthorized],
        component: AuthShellComponent
    },
    { path: "**", redirectTo: "auth" }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
