import { map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../interfaces/brand';
import { RequestServiceService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  searchBrand(search: string) {
    let param: HttpParams = new HttpParams();
    param = param.append('search', search);
    return this.request.get<Brand[]>(this.requestService.url + 'searchBrand', { params: param }).pipe(map((data: Brand[]) => {
      return data;
    }));
  }

  constructor(private requestService: RequestServiceService, private request: HttpClient) { }
  getBrand(brandName: string) {
    let param: HttpParams = new HttpParams();
    param = param.append('brand', brandName);
    return this.request.get<Brand[]>(this.requestService.url + 'getBrand', { params: param }).pipe(map((data: Brand[]) => {
      return data[0];
    }));
  }
  addBrand(brand: Brand) {
    const formData = new FormData();
    formData.append('title', brand.title);
    formData.append('link', brand.link);
    formData.append('imageURL', brand.imageURL);
    formData.append('description', brand.description);
    return this.request.post<Brand>(this.requestService.url + 'addBrand', formData);
  }

  deleteBrand(id: number) {
    const formData = new FormData();
    formData.append('id', id.toString());
    return this.request.post<Brand>(this.requestService.url + 'deleteBrand', formData);
  }
}
