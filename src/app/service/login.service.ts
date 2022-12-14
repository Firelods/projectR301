import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestServiceService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private requestService:RequestServiceService,private http:HttpClient) { }

  login(username:string,password:string){
    return this.http.post<{message:string,jwt:string}>(this.requestService.url+'login',{username:username,password:password});
  }
}
