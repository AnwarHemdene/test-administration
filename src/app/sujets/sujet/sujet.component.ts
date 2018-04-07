import { Component, OnInit } from '@angular/core';

import {SujetService} from './../shared/sujet.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {
  selectedFile: File  = null;
  files : FileList;
  constructor( private sujetService:  SujetService , private http: HttpClient ,
  private toastr: ToastrService) { }

  onFileSelected($event){
    this.selectedFile =$event.target.files[0].name;
    // console.log(event);
    this.toastr.success('Submitted Successfully', 'Sujet publié')
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
    this.sujetService.insertSujet(sujetForm.value);
    this.resetForm(sujetForm);  
  }

  resetForm(sujetForm? : NgForm){
    if(sujetForm != null)
      sujetForm.reset();
    this.sujetService.sujetSelectione = {
      $key : null,
      title: '',
      description: '',
      imgsrc: '',
      imgName: '',
    }
  }
}
