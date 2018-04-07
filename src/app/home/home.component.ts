import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email: string;
  password: string;
  
  constructor(public authService: AuthService) {}


  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }
  ngOnInit() {
  }

}
