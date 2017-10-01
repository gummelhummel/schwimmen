import { Component, OnInit } from '@angular/core';
import { PlayerService, TeamService } from '../services/';
import { Player, Team } from '../classes/';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public teams: Team[] = [];
  public players: Player[] = [];

  constructor(private pS: PlayerService, private tS: TeamService) { }

  ngOnInit() {

    this.tS.getTopTenTeams().subscribe((teams) => {
      this.teams = teams
    }, err => console.log(err));

    this.pS.getTopTenPlayer().subscribe((players) => {
      this.players = players;
    }, err => console.log(err));
  }

}
