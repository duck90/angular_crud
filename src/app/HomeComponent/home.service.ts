import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiServiceService {
    constructor(private _http: HttpClient) {}
    apiURL = "http://localhost:3000";

    getWritings (): Observable<any> {
        return this._http.get(`${this.apiURL}/writings`)
    }
}
