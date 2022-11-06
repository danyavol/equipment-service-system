import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ActiveOrdersListShellComponent } from './containers/active-orders-list-shell/active-orders-list-shell.component';
import { OrdersListShellComponent } from './containers/orders-list-shell/orders-list-shell.component';
import { SuppliesListShellComponent } from './containers/supplies-list-shell/supplies-list-shell.component';
import { WorkListShellComponent } from './containers/work-list-shell/work-list-shell.component';

const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        children: [
            {
                path: "orders",
                component: OrdersListShellComponent
            },
            {
                path: "orders/active",
                component: ActiveOrdersListShellComponent
            },
            {
                path: "supplies",
                component: SuppliesListShellComponent
            },
            {
                path: "work",
                component: WorkListShellComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
