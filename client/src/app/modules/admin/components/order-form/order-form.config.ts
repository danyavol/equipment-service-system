import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { BasicOrderFormConfig } from "src/app/shared/components/basic-order-form/basic-order-form.config";
import { OrderStatus } from "src/app/shared/constants/status.constant";
import { FormGroupRawValue, FormGroupValue } from "src/app/shared/form.interface";
import { Supply } from "../../interfaces/supply.interface";
import { Work } from "../../interfaces/work.interface";

export type PartialSupply = Pick<Supply, 'id' | 'title' | 'pieceCost'>;
export type PartialWork = Pick<Work, 'id' | 'title' | 'cost'>;

export type OrderFormValue = FormGroupValue<OrderFormConfig>;
export type OrderFormRawValue = FormGroupRawValue<OrderFormConfig>;

export class OrderFormConfig extends BasicOrderFormConfig {
    status: FormControl<string>;
    works: FormControl<PartialWork[]>;
    supplies: FormControl<PartialSupply[]>;

    constructor(value: OrderFormValue = {}) {
        super(value);
        const fb = new FormBuilder().nonNullable;
        this.status = fb.control(value.status ?? OrderStatus.New, [Validators.required]);
        this.works = fb.control(value.works ?? []);
        this.supplies = fb.control(value.supplies ?? []);
    }
}
