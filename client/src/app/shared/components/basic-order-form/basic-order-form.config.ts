import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { FormGroupRawValue, FormGroupValue } from "src/app/shared/form.interface";


export type BasicOrderFormValue = FormGroupValue<BasicOrderFormConfig>;
export type BasicOrderFormRawValue = FormGroupRawValue<BasicOrderFormConfig>;

export class BasicOrderFormConfig {
    clientName: FormControl<string>;
    phoneNumber: FormControl<string>;
    email: FormControl<string>;
    description: FormControl<string>;

    constructor(value: BasicOrderFormValue = {}) {
        const fb = new FormBuilder().nonNullable;
        this.clientName = fb.control(value.clientName ?? '', [Validators.required, Validators.maxLength(128)]);
        this.phoneNumber = fb.control(value.phoneNumber ?? '', [Validators.required, Validators.maxLength(20)]);
        this.email = fb.control(value.email ?? '', [Validators.required, Validators.email]);
        this.description = fb.control(value.description ?? '', [Validators.required, Validators.maxLength(512)])
    }
}
