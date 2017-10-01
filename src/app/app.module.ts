import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadModule } from 'angular2-image-upload';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {
  PlayerService,
  TeamService,
  LoginService,
  EnterPerformanceService,
  RegistrationService,
  NotificationService,
  RiverService,
  AuthGuardService
} from './services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamListComponent } from './team-list/team-list.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { PlayerListCardComponent } from './player-list-card/player-list-card.component';
import { TeamListCardComponent } from './team-list-card/team-list-card.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { EnterDataComponent } from './enter-data/enter-data.component';
import { NotificationComponent } from './notification/notification.component';
import { ChartComponent } from './chart/chart.component';
import { CreateTeamComponent } from './create-team/create-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PlayerListComponent,
    TeamListComponent,
    PlayerComponent,
    TeamComponent,
    PlayerListCardComponent,
    TeamListCardComponent,
    LogRegComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ConfirmationComponent,
    EnterDataComponent,
    NotificationComponent,
    ChartComponent,
    CreateTeamComponent
  ],
  imports: [
    ChartsModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    NgbModule.forRoot(),
    ImageUploadModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    PlayerService,
    TeamService,
    LoginService,
    EnterPerformanceService,
    RegistrationService,
    NotificationService,
    RiverService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
