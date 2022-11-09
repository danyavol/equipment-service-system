import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const lsKey = 'ess-isAuthorized';

@Injectable()
export class AuthService {

    get isAuthorized(): boolean {
        return this._isAuthorized;
    }

    private set isAuthorized(value: boolean) {
        this._isAuthorized = value;
        this.saveIsAuthorizedToLS();
    }

    private _isAuthorized = this.getIsAuthorizedFromLS();

    constructor(private http: HttpClient) {}

    getToken(data: { username: string, password: string }) {
        return this.http.post<void>(`${environment.apiUrl}/auth/get-token`, data).pipe(
            tap(() => this.isAuthorized = true)
        );
    }

    logOut() {
        this.isAuthorized = false;
        this.http.get(`${environment.apiUrl}/auth/logout`).subscribe();
    }

    private getIsAuthorizedFromLS(): boolean {
        try {
            const rawValue = localStorage.getItem(lsKey);
            if (!rawValue) return false;
            const parsedValue = JSON.parse(rawValue);
            if (typeof parsedValue !== 'boolean') return false;
            return parsedValue;
        } catch(e) {
            return false;
        }
    }

    private saveIsAuthorizedToLS(): void {
        localStorage.setItem(lsKey, JSON.stringify(this.isAuthorized));
    }
}
