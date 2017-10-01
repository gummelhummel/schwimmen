import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, NotificationService, PlayerService } from '../services/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public Iemail: string;
  public Ipassword: string;

  constructor(
    private lS: LoginService,
    private router: Router,
    private nS: NotificationService,
    private pS: PlayerService
    ) { }

  onSubmit() {
    this.lS.login(this.Iemail, this.Ipassword).subscribe((res) => {
      this.lS.isLogedIn = true;
      localStorage.setItem('token', res.jwt);
      this.lS.userId = this.lS.jwt.decodeToken(res.jwt)._id;
      this.pS.getPlayerById(this.lS.userId).subscribe((res) => {
        if (res.teamID != null) {
          this.lS.isInTeam = res.teamID;
          this.lS.hasTeam = true;
        } else {
          this.lS.hasTeam = false;
          this.lS.isInTeam = '';
        }
      }, err => console.log(err));
      this.nS.showAlertForSeconds(2, 'info', 'Login Erfolgreich');
      this.router.navigate(['/']);
    }, err => console.log(err));
  }

}
