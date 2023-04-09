import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable( {providedIn: 'root'})
export class HttpReq {
    constructor(private http: HttpClient) {}

    post<T>(url: string, data: any): Observable<any> {
        return this.http.post<T>(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });
    }

    get<T>(url: string): Observable<any> {
        return this.http.get<T>(url);
    }
}