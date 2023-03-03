import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Login, LoginUser } from './interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: any;

  constructor(private http: HttpClient, private router: Router) { }


  isLoggedIn = false
  private tokenKey = 'token';

  setLoginTrue() {
    this.isLoggedIn=true
   }

  public loginUser(userlogin:Login):Observable<Login> {
    return this.http.post<Login>('http://localhost:4000/api/users/login',userlogin)
  }
  // login(user:LoginUser): Observable<LoginUser> {
  //   return this.http.post<LoginUser>('http://localhost:4000/api/users/login', user);
  // }


  getauthStatus(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn)
      }, 10)
    })
    return promise;
  }
  
  logout() {
    this.isLoggedIn = false
  }
  
  
}
