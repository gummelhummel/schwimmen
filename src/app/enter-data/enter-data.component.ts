import { Component } from '@angular/core';
import { PlayerService, LoginService, NotificationService } from '../services/';

@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.css']
})
export class EnterDataComponent {

  types = [{
    name: 'Kraul',
    checked: false
  }, {
    name: 'Brust',
    checked: false
  }, {
    name: 'Rücken',
    checked: false
  }, {
    name: 'Freistil',
    checked: false
  }];

  bahnen: number = 0;
  checkedType: string = '';

  constructor(private pS: PlayerService, private lS: LoginService, private nS: NotificationService) { }

  save() {
    this.nS.showAlertForSeconds(2, 'success', 'gespeichert');
    this.pS.addData(this.lS.userId, this.checkedType, this.bahnen * 50);
    this.abort();
  }

  abort() {
    this.checkedType = '';
    this.types.forEach(type => type.checked = false);
    this.bahnen = 0;
  }

  typeClick(index: number) {
    this.types.forEach((type) => {
      type.checked = false;
    });
    this.types[index].checked = true;
    this.checkedType = this.types[index].name;
  }

  plus() {
    this.bahnen++;
  }

  minus() {
    if (this.bahnen > 0) this.bahnen--;
  }

}
