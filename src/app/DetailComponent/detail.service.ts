import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiServiceService {
    constructor(private _http: HttpClient) {}
    apiURL = "http://localhost:3000";

    getDetail (id: string): Observable<any> {
        return this._http.get(`${this.apiURL}/writings/${id}`)
    }

    modifyPost (id: string, body: object): Observable<any> {
        return this._http.put(`${this.apiURL}/writings/${id}`, body)
    }

    deletePost (id: string): Observable<any> {
        return this._http.delete(`${this.apiURL}/writings/${id}`)
    }
}
