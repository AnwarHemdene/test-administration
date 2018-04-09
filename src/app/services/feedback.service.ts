import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Feedback} from './../models/feedback.model';
@Injectable()
export class FeedbackService {


  feedbackList: AngularFireList<any>;
  feedbackSelectione: Feedback = new Feedback();
  
  
  constructor(private firebase: AngularFireDatabase) {

  }

  getData(){
    this.feedbackList = this.firebase.list('feedback');
    console.log(this.feedbackList);
    return this.feedbackList;
  }

  // insertFeedback(feedback: Feedback){
  //   this.feedbackList.push({
  //    title: feedback.about
  // });
  // }

  updateFeedback(feedback: Feedback){
    this.feedbackList.update(feedback.$userkey,{
     about: feedback.about
    })
  }

  deleteFeedback($key: string){
    this.feedbackList.remove($key);
  }
}
