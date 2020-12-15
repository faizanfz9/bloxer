import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

let headers = new HttpHeaders();
headers.append("Content-Type", "application/json");

interface AuthResponse {
  success: boolean,
  msg: string,
  token: string,
  user: object
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: any;
  user: any;

  constructor(private http: HttpClient) { 
  }

  register(user: any) {
    return this.http.post<AuthResponse>("api/users/register", user, {'headers': headers});
  }

  logIn(user: any) {
    return this.http.post<AuthResponse>("api/users/authenticate", user, {'headers': headers});
  }

  storeUserData(token: string, user: object) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.userToken = token;
    this.user = user;
  }

  logOut() {
    this.userToken = null;
    this.user = null;
    localStorage.clear();
  }  

  isAuthenticated() {
    if(localStorage.getItem("token")) {
      return true;
    }else {
      return false;
    }
  }
}
