import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SupplyFormRawValue } from '../components/supply-form/supply-form.config';
import { Supply } from '../interfaces/supply.interface';

@Injectable()
export class SuppliesApiService {

    constructor(private http: HttpClient) { }

    getAllSupplies() {
        return this.http.get<Supply[]>(`${environment.apiUrl}/supplies`);
    }

    getAvailableSupplies() {
        return this.http.get<Supply[]>(`${environment.apiUrl}/supplies/available`);
    }

    createSupply(supply: SupplyFormRawValue) {
        return this.http.post<void>(`${environment.apiUrl}/supplies`, supply);
    }

    getSupply(id: string) {
        return this.http.get<Supply>(`${environment.apiUrl}/supplies/${id}`);
    }

    updateSupply(id: string, supply: SupplyFormRawValue) {
        return this.http.put<void>(`${environment.apiUrl}/supplies/${id}`, supply);
    }

    deleteSupply(id: string) {
        return this.http.delete<void>(`${environment.apiUrl}/supplies/${id}`);
    }
}
