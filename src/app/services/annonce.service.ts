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
  // getImage(){
  //   let sImages = this.firebase.list('/annonces/IdAnnonce/URLimg').subscribe(data => {
  //     this.images = data;
  //     sImages.unsubscribe();
  //   });
  // }

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

  updateTypeTop(type : any, idAnnonce: string){
    if(type == 0){
      console.log("its in its best rate");
    }
    else{
      let newType = type - 1;
      this.annoncesList.update(idAnnonce ,{
        typeAnnonce : newType,
      })
    }
    
  }
  updateTypeDown(type : any, idAnnonce: string){
    if(type == 3){
      console.log("its in its minus rate");
    }
    else {
      let newType = type + 1;
      this.annoncesList.update(idAnnonce ,{
        typeAnnonce : newType,
      })
    }
    
  }
  delete(key:  string){
    this.annoncesList.remove(key);
  }

}
