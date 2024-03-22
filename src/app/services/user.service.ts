import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserBehaviorSubject = new BehaviorSubject<User | null>(null);

    constructor(private http:HttpClient) { }

    setCurrentUser(user: User | null){
      this.currentUserBehaviorSubject.next(user);
    }

    // get request to BE web bootstrap, to gather user info
    getBootstrapData(){
      return this.http.get('http://localhost:3000/web/bootstrap').pipe(tap((res:any) => {
        this.setCurrentUser(res.current_user)
      }))
    }
}
