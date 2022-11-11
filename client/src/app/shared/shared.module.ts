import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiErrorModule, TuiTextfieldControllerModule, TuiScrollbarModule, TuiSvgModule, TuiLoaderModule, TuiTooltipModule, TuiHintModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule, TuiInputCountModule, TuiInputModule, TuiInputNumberModule, TuiInputPasswordModule, TuiInputPhoneModule, TuiTabsModule, TuiTagModule, TuiTextAreaModule, TuiToggleModule } from '@taiga-ui/kit';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { TUI_VALIDATION_ERRORS_PROVIDER } from '../providers/validation-errors.provider';
import { BasicOrderFormComponent } from './components/basic-order-form/basic-order-form.component';
import { OrderStatusBadgeComponent } from './components/order-status-badge/order-status-badge.component';
import { CellContentDirective } from './components/table/cell-content.component';
import { TableComponent } from './components/table/table.component';

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
    TuiErrorModule,
    TuiTagModule,
    TuiTextfieldControllerModule,
    TuiTableModule,
    TuiLetModule,
    TuiScrollbarModule,
    TuiInputPasswordModule,
    TuiSvgModule,
    TuiTabsModule,
    TuiToggleModule,
    TuiLoaderModule,
    TuiTooltipModule,
    TuiHintModule,
    TuiInputNumberModule,
    TuiInputCountModule,
];

@NgModule({
    declarations: [
        OrderStatusBadgeComponent,
        BasicOrderFormComponent,
        TableComponent,
        CellContentDirective
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
        TableComponent,
        CellContentDirective
    ],
    providers: [
        TUI_VALIDATION_ERRORS_PROVIDER
    ]
})
export class SharedModule { }
