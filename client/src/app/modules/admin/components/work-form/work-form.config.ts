import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { FormGroupRawValue, FormGroupValue } from "src/app/shared/form.interface";


export type WorkFormValue = FormGroupValue<WorkFormConfig>;
export type WorkFormRawValue = FormGroupRawValue<WorkFormConfig>;

export class WorkFormConfig {
    title: FormControl<string>;
    cost: FormControl<number>;

    constructor(value: WorkFormValue = {}) {
        const fb = new FormBuilder().nonNullable;
        this.title = fb.control(value.title ?? '', [Validators.required]);
        this.cost = fb.control(value.cost ?? 0, [Validators.required, Validators.min(0)]);
    }
}
