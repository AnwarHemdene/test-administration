import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SujetsComponent } from './sujets/sujets.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    //home path, put nothing inside it
    path: 'home',
    component: HomeComponent
  },
{
  //home path, put nothing inside it
  path: 'profile',
  component: ProfileComponent
},
{
    //:id called route parameter
  path: 'login',
  component: LoginComponent
},
{
  //:id called route parameter
path: 'sujets',
component: SujetsComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }