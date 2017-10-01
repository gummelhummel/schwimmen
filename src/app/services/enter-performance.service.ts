import { Injectable } from '@angular/core';
import { Entry } from '../classes/';

@Injectable()
export class EnterPerformanceService {

  public entrys = [];

  constructor() {
    this.addEntry();
  }

  addEntry() {
    this.entrys.push(new Entry());
  }

  removeEntry(entry) {
    let i = this.entrys.findIndex((e) => { return e === entry; });
    if (i != -1) this.entrys.splice(i, 1);
  }

}
