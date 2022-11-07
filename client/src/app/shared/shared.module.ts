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
import { TuiFieldErrorPipeModule, TuiInputModule, TuiInputPhoneModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import { TUI_VALIDATION_ERRORS_PROVIDER } from '../providers/validation-errors.provider';

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

const TAIGA_MODULES = [
    TuiInputModule,
    TuiInputPhoneModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiFieldErrorPipeModule,
    TuiErrorModule
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
        ...PRIMENG_MODULES,
        ...TAIGA_MODULES
    ],
    exports: [
        ...PRIMENG_MODULES,
        ...TAIGA_MODULES,
        FormsModule,
        ReactiveFormsModule,
        OrderStatusBadgeComponent,
        BasicOrderFormComponent,
    ],
    providers: [
        TUI_VALIDATION_ERRORS_PROVIDER
    ]
})
export class SharedModule { }
