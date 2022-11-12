import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { FormGroupRawValue, FormGroupValue } from "src/app/shared/form.interface";


export type SupplyFormValue = FormGroupValue<SupplyFormConfig>;
export type SupplyFormRawValue = FormGroupRawValue<SupplyFormConfig>;

export class SupplyFormConfig {
    title: FormControl<string>;
    pieceCost: FormControl<number>;
    totalAmount: FormControl<number>;

    constructor(value: SupplyFormValue = {}) {
        const fb = new FormBuilder().nonNullable;
        this.title = fb.control(value.title ?? '', [Validators.required]);
        this.pieceCost = fb.control(value.pieceCost ?? 0, [Validators.required, Validators.min(0)]);
        this.totalAmount = fb.control(value.totalAmount ?? 1, [Validators.required, Validators.min(1)])
    }
}
