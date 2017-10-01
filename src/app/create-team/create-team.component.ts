import { Component } from '@angular/core';
import { TeamService, LoginService, NotificationService } from '../services/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent {

  public Iname: string;
  public Idescription: string;

  constructor(
    private lS: LoginService,
    private tS: TeamService,
    private nS: NotificationService,
    private router: Router
  ) { }

  onSubmit() {
    this.tS.createTeam(this.lS.userId, this.Iname, this.Idescription, this.lS.getOptions()).subscribe((res) => {
      this.lS.hasTeam = true;
      this.lS.isInTeam = res.teamID;
      this.nS.showAlertForSeconds(2, 'success', 'Team erstellt!');
      this.router.navigate(['/']);
    }, err => console.log(err));
  }

}
