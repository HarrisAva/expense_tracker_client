import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly tokenSubject = new BehaviorSubject<string | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  login(username: string, password: string) {
    return this.http
      .post<{ token: string }>(`${environment.apiUrl}/login`, {
        username,
        password,
      })
      .pipe(
        switchMap((res: any) => {
          this.setToken(res.token);
          return this.userService.getBootstrapData();
        })
      );
  }

  signup(data: any) {
    return this.http.post(`${environment.apiUrl}/users`, data);
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
    this.router.navigate(['/login']);
  }
}
