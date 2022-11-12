import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WorkFormConfig } from './work-form.config';

@Component({
  selector: 'ess-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.scss']
})
export class WorkFormComponent {
    @Input() form?: FormGroup<WorkFormConfig>;
}
