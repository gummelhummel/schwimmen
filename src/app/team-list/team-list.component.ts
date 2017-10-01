import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  public teams;

  constructor(private tS: TeamService) { }

  ngOnInit() {
    this.tS.getPage(0, 100).subscribe(teams => this.teams = teams, err => console.log(err));
  }

}
