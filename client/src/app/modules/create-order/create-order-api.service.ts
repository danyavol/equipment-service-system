import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BasicOrderFormRawValue } from "src/app/shared/components/basic-order-form/basic-order-form.config";
import { environment } from "src/environments/environment";

@Injectable()
export class CreateOrderApiService {
    constructor(private http: HttpClient) {}

    createOrder(form: BasicOrderFormRawValue) {
        return this.http.post(environment.apiUrl + "/orders", form, { responseType: "text" });
    }
}
