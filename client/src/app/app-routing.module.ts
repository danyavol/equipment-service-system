import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsShellComponent } from './containers/order-details-shell/order-details-shell.component';
import { PublicCreateOrderShellComponent } from './containers/public-create-order-shell/public-create-order-shell.component';
import { OrderResolver } from './resolvers/order.resolver';

const routes: Routes = [
    {
        path: 'new-order',
        component: PublicCreateOrderShellComponent
    },
    {
        path: 'order/:orderId',
        component: OrderDetailsShellComponent,
        resolve: {
            order: OrderResolver
        }
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
    },
    { path: '**', pathMatch: 'full', redirectTo: 'new-order' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
