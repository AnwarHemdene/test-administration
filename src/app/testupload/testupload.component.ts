import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-testupload',
  templateUrl: './testupload.component.html',
  styleUrls: ['./testupload.component.scss']
})
export class TestuploadComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }


  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
  }

  // async uploadImagePublication(captureDataUrl,idPublication,i){
  //   let storageRef = await firebase.storage().ref("publicationsimages/"+idPublication+"/");

  //   const filename = i+".jpg";
  //   const imageRef = storageRef.child(filename);

  //   await imageRef.putString(captureDataUrl, firebase.storage.StringFormat.DATA_URL).then(snap=>{
  //     console.log("image added : "+snap);
  //     console.log(snap);
  //   });

  // }
}
