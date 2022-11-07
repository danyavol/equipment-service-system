import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SupplyFormConfig } from './supply-form.config';

@Component({
    selector: 'ess-supply-form',
    templateUrl: './supply-form.component.html',
    styleUrls: ['./supply-form.component.scss']
})
export class SupplyFormComponent {
    @Input() form?: FormGroup<SupplyFormConfig>;
}
