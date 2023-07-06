import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post(this.baseUrl + '/api/authenticate',
      credentials,{withCredentials:true})
      .pipe(
        map((response: any) => {
          if(response && response.token){
            localStorage.setItem("token", response.token);
            return true
          }
          return false
        })
      );
  }

  logout() { 
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    localStorage.getItem('token');
    return localStorage.getItem('token')!==null;
  }

  get currentUser():null|{sub:any,name:any,admin:boolean}{
    let token = localStorage.getItem("token");
    if(!token) return null;

    return jwt_decode(token)
  }
}
