import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NotificationService {

  public isVisible: boolean = false;
  public seconds: number = 0;
  public type: string = '';
  public message: string = '';

  constructor() { }

  showAlertForSeconds(sec: number, type: string, message: string) {
    this.type = type;
    this.message = message;
    this.seconds = sec;

    this.decrement();
  }

  decrement() {
    if (this.seconds > 0) {
      setTimeout(() => {
        this.seconds--;
        this.decrement();
      }, 1000);
    }
  }
}
