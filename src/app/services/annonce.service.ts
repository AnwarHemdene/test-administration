import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
@Injectable()
export class AnnonceService {


  annoncesList: AngularFireList<any>;
  
  
  constructor(private firebase: AngularFireDatabase) {

  }

  getData(){
    this.annoncesList = this.firebase.list('annonces');
    console.log(this.annoncesList);
    return this.annoncesList;
  }

  // insertFeedback(feedback: Feedback){
  //   this.feedbackList.push({
  //    title: feedback.about
  // });
  // }

  updateFeedback(key : string , reponse: string){
    this.annoncesList.update(key,{
     reponse: reponse
    })
  }

  deleteFeedback($key: string){
    this.annoncesList.remove($key);
  }
}
