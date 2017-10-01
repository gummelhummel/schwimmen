import { Component, OnInit, Input } from '@angular/core';
import { RiverService } from '../services/';

@Component({
  selector: 'app-team-list-card',
  templateUrl: './team-list-card.component.html',
  styleUrls: ['./team-list-card.component.css']
})
export class TeamListCardComponent implements OnInit {

  @Input() position: number = 0;
  @Input() team;

  riverName;
  riverLink;

  constructor(private rS: RiverService) { }

  ngOnInit() {
    this.rS.getRiver(this.team.totalmeters / 1000).subscribe((res) => {
      this.riverName = res[0].doc.title;
      this.riverLink = res[0].doc.link;
    }, err => console.log(err));
  }

}
