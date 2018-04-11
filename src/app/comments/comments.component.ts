import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sujet } from '../models/sujet.model';
import {SujetService} from './../services/sujet.service';

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
  comments : any;
  constructor(private route : ActivatedRoute , private sujetService: SujetService ) {
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
      console.log("comments ", this.commentList);
    });
  }

}