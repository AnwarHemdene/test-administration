import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Sujet} from './../models/sujet.model';

@Injectable()
export class SujetService {

sujetList: AngularFireList<any>;
sujetSelectione: Sujet = new Sujet();


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

   insertSujet(sujet: Sujet){
     this.sujetList.push({
      title: sujet.title,
      description: sujet.description,
      // imgsrc : sujet.imgsrc,
      // imgName: sujet.imgName

   });
   }

   updateSujet(sujet: Sujet){
     this.sujetList.update(sujet.$key,{
      title: sujet.title,
      description: sujet.description,
      // imgsrc : sujet.imgsrc,
      // imgName: sujet.imgName
     })
   }

   deleteSujet($key: string){
     this.sujetList.remove($key);
   }
   
}
