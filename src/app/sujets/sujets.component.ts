import { Component, OnInit } from '@angular/core';

import {SujetService} from './shared/sujet.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['./sujets.component.css'],
  providers:[SujetService]
})
export class SujetsComponent implements OnInit {

  constructor(private sujetService: SujetService) { }

  ngOnInit() {
   
  }
  
}
