import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { LoginUser } from './loginUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public loginUser:LoginUser
  constructor(
    private authService:AuthService,
    ) { 
    this.loginUser = new LoginUser()
  }
  
  ngOnInit() {
  }

  login(){
    this.authService.login(this.loginUser)
  }



}