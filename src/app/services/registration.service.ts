import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Conf } from '../config';

@Injectable()
export class RegistrationService {

  private registrationUrl: string = 'http://http://81.169.217.124:8090/api/v1/users/sineup';
  private confirmUrl: string = 'http://http://81.169.217.124:8090/api/v1/users/confirm/:id';
  private conf = new Conf();

  constructor(private http: Http) {
    this.registrationUrl = this.conf.protocol + this.conf.server + this.conf.port + this.conf.api + 'users/signup';
    this.confirmUrl = this.conf.protocol + this.conf.server + this.conf.port + this.conf.api + 'users/confirm/';
  }

  confirmPlayer(id: string) {
    return this.http.get(this.confirmUrl + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  registerPlayer(email: string, username: string, firstname: string, lastname: string, password: string) {
    let body = JSON.stringify({
      email: email,
      username: username,
      firstname: firstname,
      lastname: lastname,
      password: password
    });

    this.http.post(this.registrationUrl, body)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe((res) => {
      }, err => console.log(err));
  }


  private extractData(res: Response) {
    if (res.text()) {
      let body = res.json();
      return body || {};
    }
    return {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    // if (error instanceof Response) {
    //   const body = error.json() || '';
    //   const err = body.error || JSON.stringify(body);
    //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    // } else {
    //   errMsg = error.message ? error.message : error.toString();
    // }
    // if (error.status == 401) {
    //   if (localStorage.getItem('username') && localStorage.getItem('password')) {
    //     this.lS.login(localStorage.getItem('username'), localStorage.getItem('password')).subscribe((res) => {
    //       localStorage.setItem('token', res.jwt);
    //       this.getPlayers();
    //     });
    //   }
    // }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
