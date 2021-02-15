import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`https://5f1804b87c06c900160dc844.mockapi.io/sbsc/v1/login`, data);
  }
}
