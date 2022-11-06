import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Work } from '../interfaces/work.interface';

@Injectable()
export class WorksApiService {

    constructor(private http: HttpClient) { }

    getAllWork() {
        return this.http.get<Work[]>(`${environment.apiUrl}/work`);
    }
}
