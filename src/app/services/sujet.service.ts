import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Sujet} from './../models/sujet.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SujetService {
sujetList: AngularFireList<any>;
sujetSelectione: Sujet = new Sujet();

downloadURL: Observable<string>;


  constructor(private firebase: AngularFireDatabase) {

   }

   getData(){
     this.sujetList = this.firebase.list('sujets');
     console.log(this.sujetList);
     return this.sujetList;
   }

   getComments(key : string){
      // this.sujetList = this.firebase.list('sujets/'+key+'/comments');
      // console.log(this.firebase.list('sujets/'+key+'/comments'));
      return this.firebase.list('sujets/'+key+'/comments');
   }

   insertSujet(sujet: Sujet, downloadURL: string){
    const timestamp = this.getTimeStamp();
     this.sujetList.push({
      title: sujet.title,
      description: sujet.description,
      date : timestamp,
      image: downloadURL
      // imgURL: downloadURL
      // imgsrc : sujet.imgsrc,
      // imgsrc : sujet.imgsrc,
      // imgName: sujet.imgName,

   });
   }

   updateSujet(sujet: Sujet,downloadURL: string){
    const timestamp = this.getTimeStamp();
     this.sujetList.update(sujet.$key,{
      title: sujet.title,
      description: sujet.description,
      date : timestamp,
      image: downloadURL,
      // imgURL: downloadURL
      // imgName: sujet.imgName
     })
   }

   deleteSujet($key: string){
     this.sujetList.remove($key);
   }
   getTimeStamp(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
                (now.getUTCMonth()+1) + '/' +
                now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                now.getUTCMinutes() + ':' + 
                now.getUTCSeconds();
    return (date + ' ' + time);
                

  }
  
}
