import { Component, OnInit } from '@angular/core';
import { LoginService, NotificationService, PlayerService } from '../services/';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public toggle: boolean = true;

  constructor(public lS: LoginService, private nS: NotificationService, private pS: PlayerService) { }

  ngOnInit() {
    this.lS.checkUser();
    if (localStorage.getItem('token')) {
      this.lS.userId = this.lS.jwt.decodeToken(localStorage.getItem('token'))._id;
      this.pS.getPlayerById(this.lS.jwt.decodeToken(localStorage.getItem('token'))._id).subscribe((res) => {
        if (res.teamID != null) {
          this.lS.isInTeam = res.teamID;
          this.lS.hasTeam = true;
        } else {
          this.lS.hasTeam = false;
          this.lS.isInTeam = '';
        }
      }, err => console.log(err));
    }
  }

  logout() {
    this.nS.showAlertForSeconds(2, 'info', 'Logout Erfolgreich');
    this.toggle = true;
    this.lS.logout();
  }

}
