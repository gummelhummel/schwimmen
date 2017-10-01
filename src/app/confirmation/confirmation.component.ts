import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../services/';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  public success: boolean;

  constructor(private ar: ActivatedRoute, private rS: RegistrationService) { }

  ngOnInit() {
    this.rS.confirmPlayer(this.ar.snapshot.params['id']).subscribe((res) => {
      this.success = res.success;
    }, err => console.log(err));
  }

}
