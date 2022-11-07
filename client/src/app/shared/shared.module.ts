import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { OrderStatusBadgeComponent } from './components/order-status-badge/order-status-badge.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { BasicOrderFormComponent } from './components/basic-order-form/basic-order-form.component';

const PRIMENG_MODULES = [
    ButtonModule,
    InputTextareaModule,
    InputMaskModule,
    InputTextModule,
    CardModule,
    TableModule,
    BadgeModule,
    InputNumberModule
];

@NgModule({
    declarations: [
        OrderStatusBadgeComponent,
        BasicOrderFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...PRIMENG_MODULES
    ],
    exports: [
        ...PRIMENG_MODULES,
        FormsModule,
        ReactiveFormsModule,
        OrderStatusBadgeComponent,
        BasicOrderFormComponent,
    ],
})
export class SharedModule { }
