import { User } from './user';
import { TokenService } from './../token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jtw_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }
  decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jtw_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  getUserName() {
    return this.userName;
  }
  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUser() {
    return this.userSubject.asObservable();
  }
}
