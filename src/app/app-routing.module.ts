import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamListComponent } from './team-list/team-list.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { EnterDataComponent } from './enter-data/enter-data.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { AuthGuardService } from './services/'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'schwimmer', component: PlayerListComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'schwimmer/:id', component: PlayerComponent },
  { path: 'team/create', component: CreateTeamComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'user', component: LogRegComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'confirmation/:id', component: ConfirmationComponent },
  { path: 'add', component: EnterDataComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
