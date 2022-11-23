import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderFormConfig } from '../../components/order-form/order-form.config';

@Component({
  selector: 'ess-create-order-shell',
  templateUrl: './create-order-shell.component.html',
  styleUrls: ['./create-order-shell.component.scss']
})
export class CreateOrderShellComponent {
    isLoading = false;
    form = new FormGroup(new OrderFormConfig());

    submit(o?: boolean) {
        console.log(this.form.value);
    }
}
