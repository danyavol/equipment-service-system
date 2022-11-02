import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OrdersListShellComponent } from './containers/orders-list-shell/orders-list-shell.component';

const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        children: [
            {
                path: "orders",
                component: OrdersListShellComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
