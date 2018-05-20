import { Component, OnInit } from '@angular/core';
import {AnnonceService} from './../services/annonce.service';
@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit {
  annonceList: any[];
  imgList: any[];
  constructor(private annonceService: AnnonceService) { }

  ngOnInit() {
    var x = this.annonceService.getData();
    x.snapshotChanges().subscribe(item => {
      this.annonceList = [];
          item.forEach(element => {
        this.annonceList.push(element.payload.toJSON());
        for (let i of this.annonceList) {
          console.log("this is iiiiii " + element.payload.toJSON()); // "4", "5", "6"
       }
      });
    });
  }


  add(annonce : any){
    this.annonceService.updateTypeTop(annonce.typeAnnonce , annonce.idAnnonce);
  }
  sous(annonce : any){
      this.annonceService.updateTypeDown(annonce.typeAnnonce , annonce.idAnnonce);
      
  }
  delete(annonce : any){
    this.annonceService.delete(annonce.idAnnonce);
  }
  
}
