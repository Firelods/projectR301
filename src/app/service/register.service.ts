import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginService } from './login.service';
import { RequestServiceService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private requestService: RequestServiceService, private loginService: LoginService, private router: Router) { }
  register(email: string, password: string, firstName: string, lastName: string) {
    // make request with body with form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('firstName', firstName);
    formData.append('surname', lastName);
    return this.http.post<{ message: string, jwt: string }>(this.requestService.url + 'register', formData).pipe(map((data: { message: string, jwt: string }) => {
      if (data.message === 'User registered successfully') {
        this.loginService.login(email, password).subscribe((data) => {
          console.log(data);

        });
      }
      return data.message;
    }));
  }
}
