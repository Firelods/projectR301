import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {
  url = 'http://seinksansdoozebank.engineer/api/';


}
