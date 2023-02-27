import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: any;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = 'http://localhost:4200//login';
    const body = { email: email, password: password };
    return this.http.post(url, body);
  }

  signup(email: string, password: string) {
    const apiUrl = 'http://localhost:4200//signup';
    const body = { email, password };
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/signup`, body);
  }
  
}
