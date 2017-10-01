import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  public players;

  constructor(private pS: PlayerService) { }

  ngOnInit() {
    this.pS.getPage(0, 100).subscribe((players) => {
      this.players = players;
    }, err => console.log(err));
  }

}
