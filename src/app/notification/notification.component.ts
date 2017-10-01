import { Component } from '@angular/core';
import { NotificationService } from '../services/';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  constructor(public nS: NotificationService) { }

  close() {
    this.nS.seconds = 0;
  }


}
