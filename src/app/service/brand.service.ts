import { map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../interfaces/brand';
import { RequestServiceService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private requestService: RequestServiceService, private request: HttpClient) { }
  getBrand(brandId:string){
    let param:HttpParams = new HttpParams();
    param = param.append('brandId', brandId);
    return this.request.get<Brand>(this.requestService.url+'getBrand',{params: param}).pipe(map((data: Brand) => {
      console.log(data);
      return data;
    }))
  }
}
