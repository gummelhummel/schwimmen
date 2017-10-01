import { Component, OnInit, Input } from '@angular/core';
import { TeamService, PlayerService, RiverService } from '../services/';

@Component({
  selector: 'app-player-list-card',
  templateUrl: './player-list-card.component.html',
  styleUrls: ['./player-list-card.component.css']
})
export class PlayerListCardComponent implements OnInit {

  @Input() position: number = 0;
  @Input() player;

  team;
  riverName;
  riverLink;

  constructor(private tS: TeamService, private pS: PlayerService, private rS: RiverService) { }

  ngOnInit() {
    if ('teamId' in this.player) {
      this.tS.getTeamById(this.player.teamId).subscribe(team => this.team = team, err => console.log(err));
    }
    this.rS.getRiver(this.player.totalmeters / 1000).subscribe((res) => {
      this.riverName = res[0].doc.title;
      this.riverLink = res[0].doc.link;
    }, err => console.log(err));
  }

}
