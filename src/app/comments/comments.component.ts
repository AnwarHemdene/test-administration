import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sujet } from '../models/sujet.model';
import {SujetService} from './../services/sujet.service';
import * as firebase from 'firebase/app';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  sujet : any;
  key : string ;
  data : any;
  commentList: any[];
  comments :  AngularFireList<any>;
  commentaire: string;
  constructor(private route : ActivatedRoute , private sujetService: SujetService ,
    private afDb: AngularFireDatabase) {
  this.route.params.subscribe( data => this.data = data);
  // console.log(this.data.sujet);
 
   }

  ngOnInit() {
      // console.log(this.data.sujet);

    var x = this.sujetService.getComments(this.data.sujet);
    x.snapshotChanges().subscribe(item => {
      this.commentList = [];
      item.forEach(element => {
        this.commentList.push(element.payload.toJSON());
      });
      // console.log("comments ", this.commentList);
    });
  }

  commenter(comments: any){
    // comments: any[];
    // content: string;
    // author: string ;
    // date : Date;
    // commentkey: string;
    // this.commentList.push({
    //   content: this.commentaire,
    //   author : firebase.auth().currentUser.email,
    //   date: timestamp,
    //   commentkey: "bla"
    // });
    // console.log(this.commentList);
    // this.comments.push(this.commentList);
    
      const timestamp = this.getTimeStamp()
    // const afList = this.afDb.list('sujets/'+this.data.sujet+'/comments');
    //   this.commentList.push({
    //     content: this.commentaire,
    //   author : firebase.auth().currentUser.email,
    //   date: timestamp,
    //   commentkey: "bla",
    //   });
    //   console.log(this.commentList);
    //   const listObservable = this.commentList.snapshotChanges();
    //   // console.log(listObservable);
    //   listObservable.subscribe();


      const afList = this.afDb.list('sujets/'+this.data.sujet+'/comments');
      afList.push({
        content: this.commentaire,
          author : 'Admin',
          // firebase.auth().currentUser.email,
          date: timestamp,
          commentkey: "bla"
        });
      const listObservable = afList.snapshotChanges();
      listObservable.subscribe();
      
      this.commentaire='';
    




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