import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  nouveau : string;
  confirmNouveau : string;
  user : any;
  constructor(private authService : AuthService , private toastr: ToastrService) { 
    this.user = firebase.auth().currentUser.email;
  }

  ngOnInit() {
  }
  resetPassword() {
    if (this.nouveau == this.confirmNouveau){
      if (!this.authService.resetPassword(this.nouveau)){
      this.toastr.success('Changed Successfully','mot de passe changé');
      this.nouveau="";
        this.confirmNouveau = "";
      }
      else {
        this.toastr.warning('ERROR','Something wrong from server');
        this.nouveau="";
        this.confirmNouveau = "";
      }
    }
    else
    {
      this.toastr.show('ERROR','Ne sont pas identique ');
      this.nouveau="";
        this.confirmNouveau = "";
    }
    
    // resetPassword(this.email)
  }
}
