import { Component } from '@angular/core';
import { RegistrationService } from '../services/';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  submitted = false;

  public Iemail: string;
  public Iusername: string;
  public Ifirstname: string;
  public Ilastname: string;

  public Ipassword: string;
  public IpasswordRepeat: string;

  // private profileImage: string;

  constructor(private rS: RegistrationService) { }

  onSubmit() {
    this.submitted = true;
    this.rS.registerPlayer(this.Iemail, this.Iusername, this.Ifirstname, this.Ilastname, this.Ipassword);
  }
}