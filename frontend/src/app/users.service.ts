import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUser, UserInterface } from './interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  Users:UserInterface[] = []


  constructor(private http: HttpClient, private route:Router) { }

  signUp(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`http://localhost:4000/api/users/register`, user);
    // return this.http.post<User>('http://localhost:4000/users/register', user)
  }

  login(user:LoginUser): Observable<LoginUser> {
    return this.http.post<LoginUser>('http://localhost:4000/api/users/login', user);
  }

  getUsers():Observable<UserInterface[]>{
    // return this.Books
    return this.http.get<UserInterface[]>('http://localhost:4000/api/users')

      }
}
