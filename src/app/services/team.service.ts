import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Conf } from '../config';

@Injectable()
export class TeamService {

  private teamUrl = 'http://50cent.spoekes-band.de/api/v1/users/page/anzahl/seite';
  private createTeamUrl = 'http://50cent.spoekes-band.de/api/v1/users/page/anzahl/seite';
  private conf = new Conf();
  public teams;

  constructor(private http: Http, private router: Router) {
    this.teamUrl = this.conf.protocol + this.conf.server + this.conf.port + this.conf.api + 'teams';
    this.createTeamUrl = this.conf.protocol + this.conf.server + this.conf.port + this.conf.api + 'teams/create';
  }

  getTeamById(id: string) {
    return this.http.get(this.teamUrl + '/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTopTenTeams() {
    return this.http.get(this.teamUrl + '/page/10/0')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPage(page: number, number: number = 10) {
    return this.http.get(this.teamUrl + '/page/' + number + '/' + page)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createTeam(id: string, name: string, description: string, options) {

    let body = JSON.stringify({
      "userID": id,
      "teamname": name,
      "description": description
    });

    return this.http.post(this.createTeamUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // updatePlayer(player: Player, password: string) {
  //   let body = {
  //     _id: player._id,
  //     username: player.username,
  //     password: password,
  //     image: player.image,
  //     hits: player.hits
  //   };
  //   this.http.put(this.playerUrl, body, this.lS.getOptions())
  //     .map(this.extractData)
  //     .catch(this.handleError)
  //     .subscribe((res) => { }, err => this.lS.logout());
  // }

  // addPlayer(username: string, password: string, image: string) {
  //   let body = JSON.stringify({
  //     username: username,
  //     password: password,
  //     image: image,
  //     hits: []
  //   });

  //   this.http.post(this.playerUrl, body, this.lS.getOptions())
  //     .map(this.extractData)
  //     .catch(this.handleError)
  //     .subscribe((res) => {
  //       this.players.push(res);
  //     }, err => this.lS.logout());
  // }

  // addWord(player: Player, word: string) {
  //   let body = JSON.stringify({
  //     "_id": player._id,
  //     "word": word,
  //     "timestamp": Date.now()
  //   });
  //   this.http.post(this.hitUrl, body, this.lS.getOptions())
  //     .map(this.extractData)
  //     .catch(this.handleError)
  //     .subscribe((res) => { }, err => this.lS.logout());
  // }

  // removeWord(player: Player, word: string) {
  //   this.http.delete(this.hitUrl + '/' + player._id + '/' + word, this.lS.getOptions())
  //     .map(this.extractData)
  //     .catch(this.handleError)
  //     .subscribe((res) => { }, err => this.lS.logout());
  // }

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
