import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { RegisterUser } from '../register/registerUser';
import { LoginUser } from '../login/loginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  path = environment.path
  TOKEN_KEY = "token"

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    return this.http.post(this.path + '/customer/addCustomer', JSON.stringify(registerUser), { headers: headers }).subscribe(data => {
      this.router.navigate(['/login'])
    },
      err => {
        console.log(err)
        alert("There were problems creating your account.")
      })
  }

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders()
    headers = headers.append("Content-Type", "application/json")
    console.log(loginUser)
    return this.http.post(this.path + '/login', loginUser, { headers: headers }).subscribe(data => {
      this.saveToken(data['token'])
      this.router.navigate(['/home'])
    },
      err => {
        console.log(err)
        alert("Email or Password invalid")
      })
  }





  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/login']);
  }
  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}