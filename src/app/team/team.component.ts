import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService, LoginService, PlayerService, NotificationService } from '../services/';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team;

  constructor(
    private tS: TeamService,
    private aR: ActivatedRoute,
    public lS: LoginService,
    private pS: PlayerService,
    private nS: NotificationService,
    private router: Router) { }

  ngOnInit() {
    this.setTeam();
  }

  setTeam() {
    this.tS.getTeamById(this.aR.snapshot.params['id']).subscribe((team) => {
      if ('error' in team) {
        this.nS.showAlertForSeconds(3, 'warning', 'Team nicht gefunden!');
        this.router.navigate(['/']);
      }
      this.team = team;
    }, err => {
      this.nS.showAlertForSeconds(3, 'warning', 'Team nicht gefunden!');
      this.router.navigate(['/']);
    });
  }

  leave() {
    this.pS.joinTeam(this.lS.userId);
    this.lS.hasTeam = false;
    this.lS.isInTeam = null;
    this.nS.showAlertForSeconds(2, 'info', 'Team verlassen');
    this.setTeam();
  }

  join() {
    this.pS.joinTeam(this.lS.userId, this.team._id);
    this.lS.isInTeam = this.team._id;
    this.lS.hasTeam = true;
    this.nS.showAlertForSeconds(2, 'info', 'Team beigetreten');
    this.setTeam();
  }

}
