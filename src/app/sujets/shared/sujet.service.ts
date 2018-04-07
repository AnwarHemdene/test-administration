import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {SujetClass} from './sujet-class.model';

@Injectable()
export class SujetService {

sujetList: AngularFireList<any>;
sujetSelectione: SujetClass = new SujetClass();


  constructor(private firebase: AngularFireDatabase) {

   }

   getData(){
     this.sujetList = this.firebase.list('sujets');
     return this.sujetList;
   }

   insertSujet(sujet: SujetClass){
     this.sujetList.push({
      title: sujet.title,
      description: sujet.description,
      imgsrc : sujet.imgsrc
   });
   }

   updateSujet(sujet: SujetClass){
     this.sujetList.update(sujet.$key,{
      title: sujet.title,
      description: sujet.description,
      imgsrc : sujet.imgsrc
     })
   }

   deleteSujet($key: string){
     this.sujetList.remove($key);
   }
}
