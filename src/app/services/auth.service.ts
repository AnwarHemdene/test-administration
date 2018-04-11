import { Injectable } from '@angular/core';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  other : any;
  constructor(private firebaseAuth: AngularFireAuth, private toastr: ToastrService) {
    this.user = firebaseAuth.authState;
   }
   
   login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        // console.log('Nice, it worked!');
        this.toastr.success('Connecté','Bienvenue Admin');
      })
      .catch(err => {
        this.toastr.warning('ERROR','Veuillez verifier vos informations');
      });
      //
      // this.firebaseAuth.auth.onAuthStateChanged()
  }
// 
  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  resetPassword(newPass: string) {
    var auth = firebase.auth();


    var user = firebase.auth().currentUser;

user.updatePassword(newPass).then(function() {
        console.log("pass changed ");
  return true;
}).catch(function(error) {
  console.log("ERROR ");
  return false;
});
    // console.log(newPass);
    // auth.currentUser.updatePassword(newPass).then(function() {
    //   console.log("pass changed ");
    // }).catch(function(error) {
    //   console.log("ERROR ");
    // });
    // console.log(auth.currentUser.);
  //   return auth.sendPasswordResetEmail(email)
  //     .then(() => console.log("email sent"))
  //     .catch((error) => console.log(error))
  }
}
