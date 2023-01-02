import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LoginService } from './login.service';
import { RequestServiceService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private requestService: RequestServiceService, private request: HttpClient, private loginService: LoginService) { }
  getCart() {
    return this.request.get(this.requestService.url + 'getCart').pipe(map((data: any) => {
      return data;
    }));
  }
  addToCart(id: number, quantity: number) {
    var formData = new FormData();
    formData.append('idProduct', id.toString());
    formData.append('quantity', quantity.toString());
    formData.append('mailCustomer', this.loginService.getUser().email);
    return this.request.post(this.requestService.url + 'addToCart', formData).pipe(map((data: any) => {
      return data;
    }));
  }
  deleteFromCart(id: number, quantity: number) {
    var formData = new FormData();
    formData.append('idProduct', id.toString());
    formData.append('quantity', quantity.toString());
    formData.append('mailCustomer', this.loginService.getUser().email);
    return this.request.post(this.requestService.url + 'deleteFromCart', formData).pipe(map((data: any) => {
      return data;
    }));
  }
}
