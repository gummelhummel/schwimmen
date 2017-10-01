import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private lS: LoginService) { }

  canActivate() {
    if (localStorage.getItem('token') && !this.lS.jwt.isTokenExpired(localStorage.getItem('token'))) return true;
    this.router.navigate(['/'])
    return false;
  }


}
