import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './modules/create-order/create-order.component';

const routes: Routes = [
    {
        path: 'new-order',
        component: CreateOrderComponent
    },
    {
        path: 'admin',
        // canMatch: [], // TODO: Add guard
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
    },
    { path: '**', pathMatch: 'full', redirectTo: 'new-order' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
