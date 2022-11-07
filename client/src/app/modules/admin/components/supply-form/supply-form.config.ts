import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { FormGroupRawValue, FormGroupValue } from "src/app/shared/form.interface";


export type SupplyFormValue = FormGroupValue<SupplyFormConfig>;
export type SupplyFormRawValue = FormGroupRawValue<SupplyFormConfig>;

export class SupplyFormConfig {
    title: FormControl<string>;
    pieceCost: FormControl<number | null>;
    totalAmount: FormControl<number>;

    constructor(value: SupplyFormValue = {}) {
        const fb = new FormBuilder();
        this.title = fb.nonNullable.control(value.title ?? '', [Validators.required]);
        this.pieceCost = fb.control(value.pieceCost ?? null, [Validators.required, Validators.min(0)]);
        this.totalAmount = fb.nonNullable.control(value.totalAmount ?? 1, [Validators.required, Validators.min(1)])
    }
}
