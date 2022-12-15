import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RequestServiceService } from './request.service';
import jwt_decode from 'jwt-decode';
import * as moment from "moment";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedIn = false;
  constructor(private requestService: RequestServiceService, private http: HttpClient) { }

  login(email: string, password: string) {
    // make request with body with form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return this.http.post<{ message: string, jwt: string }>(this.requestService.url + 'login', formData).pipe(map((data: { message: string, jwt: string }) => {
      console.log(data);
      if (data.message === 'User login successfully') {
        this.loggedIn = true;
        localStorage.setItem('jwt', data.jwt);
        console.log((jwt_decode(data.jwt) as { exp: { date: string, timezone_type: number, timezone: string } }).exp.date);
        localStorage.setItem('expiry', (jwt_decode(data.jwt) as { exp: { date: string, timezone_type: number, timezone: string } }).exp.date);
      }
      return data.message;
    }));
  }
  getUser() {
    var user = localStorage.getItem('jwt');
    if (user === null) {
      return null;
    }
    console.log(jwt_decode(user));
    return null;
  }
  getExpiration() {
    const expiration = localStorage.getItem('expiry');
    if (expiration !== null) {
      return moment(expiration, 'YYYY-MM-DD HH:mm:ss.SSSSSS');
    }
    return null;
  }

  isLoggedIn() {
    console.log(moment());
    console.log(this.getExpiration());
    if (this.getExpiration() === null) {
      return false;
    }
    return moment().isBefore(this.getExpiration());
  }
}
