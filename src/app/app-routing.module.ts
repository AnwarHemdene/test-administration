import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {NouveauSujetComponent} from './nouveau-sujet/nouveau-sujet.component'
import { ListeSujetsComponent } from './liste-sujets/liste-sujets.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent},
  { path: 'liste-sujets', component: ListeSujetsComponent},
  { path: 'nouveau-sujet', component: NouveauSujetComponent},
  { path: 'feedback-liste', component: FeedbackListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }