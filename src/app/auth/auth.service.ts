import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

@Injectable()
export class AuthService {
  authChenges = new Subject<boolean>();
  private user: User | undefined | null;

  constructor(private router: Router){}


  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfuly()
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessfuly()

  }

  logout() {
    this.user = null;
    this.authChenges.next(false)
    this.router.navigate(['/login'])
  }

  getUser() {
    return {...this.user}
  }

  isAuth() {
    return this.user != null
  }

  private authSuccessfuly() {
    this.authChenges.next(true)
    this.router.navigate(['/training'])
  }
}
