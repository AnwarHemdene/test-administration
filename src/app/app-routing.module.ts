import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import {NouveauSujetComponent} from './nouveau-sujet/nouveau-sujet.component'
import { ListeSujetsComponent } from './liste-sujets/liste-sujets.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'liste-sujets', component: ListeSujetsComponent},
  { path: 'nouveau-sujet', component: NouveauSujetComponent},
  { path: 'feedback-liste', component: FeedbackListComponent},
  { path: 'comments/:sujet', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }