import { Injectable } from '@angular/core';
import { RequestServiceService } from './request.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { map, Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private requestService: RequestServiceService, private request: HttpClient) { }
  getProducts() {
    return this.request.get<Product[]>(this.requestService.url + 'test').pipe(map((data: Product[]) => {
      return data;
    }));
  }
  getProductById(id: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    return this.request.get<Product>(this.requestService.url + 'getProductById', { params: queryParams }).pipe(map((data: Product) => {
      return data;
    }));
  }
}
