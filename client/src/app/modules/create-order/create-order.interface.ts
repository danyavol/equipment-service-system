import { FormControl } from "@angular/forms";

export interface CreateOrderForm {
    clientName: FormControl<string>;
    phoneNumber: FormControl<string>;
    email: FormControl<string>;
    description: FormControl<string>;
}
