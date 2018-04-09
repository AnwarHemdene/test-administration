import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { SujetService} from '../app/sujet.service';

import {ToastrModule} from 'ngx-toastr';
import { NouveauSujetComponent } from './nouveau-sujet/nouveau-sujet.component';
import { ListeSujetsComponent } from './liste-sujets/liste-sujets.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    NouveauSujetComponent,
    ListeSujetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService , SujetService],
  bootstrap: [AppComponent]
})
export class AppModule { }