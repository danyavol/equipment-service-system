import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Analytics } from '../interfaces/analytics.interface';

@Injectable()
export class AnalyticsService {

    constructor(private http: HttpClient) { }

    getAnalyticsData() {
        return this.http.get<Analytics>(environment.apiUrl + '/analytics');
    }
}
