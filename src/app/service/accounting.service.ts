import { Injectable } from '@angular/core';
import { RequestServiceService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { Purchase } from '../interfaces/purchase';
import { map, Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  constructor(private requestService: RequestServiceService, private request: HttpClient) { }
  getProfit(){
    return this.request.get<number>(this.requestService.url + 'getProfit').pipe(map((data: number) => {
      return data;
    }));
  }
  getPurchases() {
    return this.request.get<Purchase[]>(this.requestService.url + 'getPurchases').pipe(map((data: Purchase[]) => {
      return data;
    }));
  }

}
