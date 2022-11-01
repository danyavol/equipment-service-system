import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'ess-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    data: any = 0;

    constructor(private http: HttpClient) {}

    addNew() {
        this.http.get(environment.apiUrl + "/orders").subscribe();
    }

    refresh() {
        this.http.get(environment.apiUrl + "/orders").subscribe(data => this.data = data);
    }
}
