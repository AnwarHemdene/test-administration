import { Component, OnInit } from '@angular/core';

import {SujetService} from './../services/sujet.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nouveau-sujet',
  templateUrl: './nouveau-sujet.component.html',
  styleUrls: ['./nouveau-sujet.component.scss']
})
export class NouveauSujetComponent implements OnInit {
  selectedFile: File  = null;
  files : FileList;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
   URL ;
  img;

  constructor( private sujetService:  SujetService , private http: HttpClient ,
  private toastr: ToastrService, private afStorage: AngularFireStorage) { }

  onFileSelected($event){
    this.selectedFile =$event.target.files[0].name;
    // console.log(event);
    // this.toastr.success('Submitted Successfully', 'Sujet publié')
  }
  
  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post('https://administration-703fe.firebaseapp.com/',fd)
  //   .subscribe(res => {
  //     console.log(res);
  //   })
  // }
  

  
  ngOnInit() {
    this.sujetService.getData();
    this.resetForm();
  }

  onSubmit(sujetForm : NgForm){
    console.log(this.downloadURL.value);
    URL = this.downloadURL.value;
    if(sujetForm.value.$key == null)
    
    this.sujetService.insertSujet(sujetForm.value, this.downloadURL.value);
    else 
    this.sujetService.updateSujet(sujetForm.value, this.downloadURL.value);
    this.resetForm(sujetForm);  
    this.toastr.success('Submitted Successfully','Sujet publié');
 
  }

  resetForm(sujetForm? : NgForm){
    if(sujetForm != null)
      sujetForm.reset();
    this.sujetService.sujetSelectione = {
      $key : null,
      title: '',
      description: '',
      // imgsrc: '',
      // imgName: '',
      date : null, 
      image: null
    }
  }
  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
  }
  
}
