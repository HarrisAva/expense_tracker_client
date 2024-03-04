import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http:HttpClient, private router:Router, private userService:UserService) {}

  login(username: string, password: string) {
    return this.http.post<{token: string}>('http://localhost:3000/login', {
      username,
      password,
    }).pipe(switchMap((res:any) => {
      this.setToken(res.token)
      return this.userService.getBootstrapData()
    }))
  }
  // return observable for a token
  // then use switchMap to setToken, and request to get user data from web/bootstrap controller

  signup(data:any) {
    return this.http.post('http://localhost:3000/users', data)
  }

  setToken(token: string) {
    localStorage.setItem('token', token);

  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    // this.tokenSubject.next(null);
    this.router.navigate(['/login'])
  }
}
