import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from './jwt-helper';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Conf } from '../config';

@Injectable()
export class LoginService {

  private loginUrl: string = 'http://50cent.spoekes-band.de/api/v1/login';
  public jwt = new JwtHelper();
  private conf = new Conf();

  public isLogedIn: boolean = false;

  public userId: string;
  public hasTeam: boolean;
  public isInTeam: string;

  public player;

  constructor(private http: Http, private router: Router) {
    this.loginUrl = this.conf.protocol + this.conf.server + this.conf.port + this.conf.api + 'login';
  }

  checkUser() {
    if (localStorage.getItem('token')) {
      this.isLogedIn = this.jwt.isTokenExpired(localStorage.getItem('token'), 3600);
      if (!this.isLogedIn) this.logout();
    }
  }

  login(username: string, password: string) {

    let body = JSON.stringify({
      "email": username,
      "password": password
    });

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getHeader(): Headers {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return headers;
  }

  getOptions(): RequestOptions {
    let options = new RequestOptions({ headers: this.getHeader() });
    return options;
  }

  logout() {
    this.isLogedIn = false;
    this.userId = null;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
    // return body.data || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    this.logout();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
