import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService, TeamService, NotificationService } from '../services/';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player;
  team;

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];

  constructor(
    private pS: PlayerService,
    private tS: TeamService,
    private aR: ActivatedRoute,
    private router: Router,
    private nS: NotificationService) { }

  ngOnInit() {
    if (this.aR.snapshot.params['id']) {
      this.pS.getPlayerById(this.aR.snapshot.params['id']).subscribe((player) => {
        this.player = player;
        // let meters: Array<any> = [];
        // player.meters.forEach((entry) => {
        //   if (entry.meters) {
        //     meters.push(entry.meters);
        //     let date = new Date(entry.timestamp);
        //     this.lineChartLabels.push(date.getUTCDay() + '.' + date.getMonth() + '.' + date.getFullYear());
        //   }
        // });
        // this.lineChartData = [{ data: meters, label: 'Meter' }];
      }, err => {
        this.nS.showAlertForSeconds(2, 'warning', 'Schwimmer nicht gefunden');
        this.router.navigate(['/']);
      });
    } else {
      this.nS.showAlertForSeconds(2, 'warning', 'Schwimmer nicht gefunden');
      this.router.navigate(['/']);
    }
  }

}
