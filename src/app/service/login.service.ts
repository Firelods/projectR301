import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestServiceService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private requestService: RequestServiceService, private http: HttpClient) { }

  login(email: string, password: string) {
    // make request with body with form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);



    return this.http.post<any/*{ message: string, jwt: string }*/>(this.requestService.url + 'login', formData);
  }
}
