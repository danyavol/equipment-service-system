import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Supply } from '../interfaces/supply.interface';

@Injectable()
export class SuppliesApiService {

    constructor(private http: HttpClient) { }

    getAllSupplies() {
        return this.http.get<Supply[]>(`${environment.apiUrl}/supplies`);
    }
}
