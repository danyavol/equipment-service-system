import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateOrderApiService } from './create-order-api.service';
import { CreateOrderForm } from './create-order.interface';

@Component({
    selector: 'ess-create-order',
    templateUrl: './create-order.component.html',
    styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
    form: FormGroup<CreateOrderForm>;

    constructor(fb: FormBuilder, private apiService: CreateOrderApiService) {
        this.form = fb.nonNullable.group({
            clientName: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            email: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

    submit() {
        this.form.markAsTouched();
        if (this.form.invalid) return;

        this.apiService.createOrder(this.form.getRawValue()).subscribe();
    }

}
