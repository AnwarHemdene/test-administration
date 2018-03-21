import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['./sujets.component.scss']
})
export class SujetsComponent implements OnInit {
  selectedFile: File  = null;
  files : FileList;
  constructor( private http: HttpClient ) {
    
  }
  
  
ngOnInit() {
}

onFileSelected($event){
  // this.selectedFile =event.target.files[0].name;
  console.log(event);
}

onUpload(){
  const fd = new FormData();
  fd.append('image', this.selectedFile, this.selectedFile.name);
  this.http.post('https://administration-703fe.firebaseapp.com/',fd)
  .subscribe(res => {
    console.log(res);
  })
}
}
