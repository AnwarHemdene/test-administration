import { Component, OnInit } from '@angular/core';
import {SujetService} from './../services/sujet.service';
import {Sujet} from '../models/sujet.model';
import { ToastrService} from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';   
@Component({
  selector: 'app-liste-sujets',
  templateUrl: './liste-sujets.component.html',
  styleUrls: ['./liste-sujets.component.scss']
})
export class ListeSujetsComponent implements OnInit {
  sujetList: Sujet[];

  constructor(private sujetService: SujetService,
    private toastr: ToastrService, private route: ActivatedRoute, private router: Router) { }
    
    createNew(){
      this.router.navigate(['nouveau-sujet']);
    }
    ngOnInit() {
      var x = this.sujetService.getData();
      x.snapshotChanges().subscribe(item => {
        this.sujetList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.sujetList.push(y as Sujet);
        });
      });
    }
  
    onEdit(sujet: Sujet){
      this.sujetService.sujetSelectione = Object.assign({}, sujet);
    }
    onDelete(key: string) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.sujetService.deleteSujet(key);
        this.toastr.warning("Deleted Successfully", "Sujet deleted");
      }
    }
  }
  