import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroupRawValue } from "src/app/shared/form.interface";
import { environment } from "src/environments/environment";
import { CreateOrderForm } from "./create-order.interface";

@Injectable()
export class CreateOrderApiService {
    constructor(private http: HttpClient) {}

    createOrder(form: FormGroupRawValue<CreateOrderForm>) {
        return this.http.post<void>(environment.apiUrl + "/orders", form);
    }
}
