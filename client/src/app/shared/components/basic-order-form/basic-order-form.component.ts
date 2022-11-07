import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasicOrderFormConfig } from './basic-order-form.config';

@Component({
    selector: 'ess-basic-order-form',
    templateUrl: './basic-order-form.component.html',
    styleUrls: ['./basic-order-form.component.scss']
})
export class BasicOrderFormComponent {
    @Input() form?: FormGroup<BasicOrderFormConfig>;
}
