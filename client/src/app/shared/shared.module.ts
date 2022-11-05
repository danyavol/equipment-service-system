import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

const PRIMENG_MODULES = [
    ButtonModule,
    InputTextareaModule,
    InputMaskModule,
    InputTextModule,
    CardModule,
    TableModule  
];

@NgModule({
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
    ]
})
export class SharedModule { }
