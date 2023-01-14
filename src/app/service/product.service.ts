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
    return this.request.get<Product[]>(this.requestService.url + 'getProducts').pipe(map((data: Product[]) => {
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

  addProduct(product: Product) {
    // make the product in a formData
    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('description', product.descriptionProduct);
    formData.append('publicPrice', product.publicPrice.toString());
    formData.append('purchasePrice', product.purchasePrice.toString());
    formData.append('imageURL', product.imageURL);
    formData.append('brand', product.brand);

    return this.request.post<Product>(this.requestService.url + 'addProduct', formData).pipe(map((data: Product) => {
      return data;
    }));
  }

  searchProduct(search: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("search", search);
    return this.request.get<Product[]>(this.requestService.url + 'getProductByName', { params: queryParams }).pipe(map((data: Product[]) => {
      return data;
    }));
  }
}
