import { Component, OnInit } from '@angular/core';
import {SujetService} from './../shared/sujet.service';

@Component({
  selector: 'app-sujet-list',
  templateUrl: './sujet-list.component.html',
  styleUrls: ['./sujet-list.component.css']
})
export class SujetListComponent implements OnInit {

  constructor(private sujetService: SujetService) { }

  ngOnInit() {
  }

}
