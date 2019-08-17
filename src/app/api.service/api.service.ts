import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'localhost:4201/';
  constructor(private http: HttpClient) { }

  executePost(params: any, subUrl: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.post(this.url + subUrl, params, options);
  }
}
