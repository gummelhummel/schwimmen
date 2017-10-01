import { Component, OnInit } from '@angular/core';
import { EnterPerformanceService, LoginService } from '../services/';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public firstname: string = '';
  public lastname: string = '';
  public description: string = '';

  constructor(public epS: EnterPerformanceService, private lS: LoginService) { }

  ngOnInit() {
    this.firstname = this.lS.jwt.decodeToken(localStorage.getItem('token')).firstname;
    this.lastname = this.lS.jwt.decodeToken(localStorage.getItem('token')).lastname;
    this.description = this.lS.jwt.decodeToken(localStorage.getItem('token')).description;
  }

  addEntry() {
    this.epS.addEntry();
  }

  saveEntrys() {
  }


}
