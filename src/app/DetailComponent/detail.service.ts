import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiServiceService {
    constructor(private _http: HttpClient) {}
    apiURL = "http://localhost:3000";

    getDetail (id: string) {
        return this._http.get(`${this.apiURL}/writing/${id}`)
    }
}
