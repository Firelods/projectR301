import { BrandService } from './../service/brand.service';
import { Brand } from './../interfaces/brand';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  targetBrand!: Brand;
  constructor (private brandService: BrandService){
    const queryString = window.location.search;
    console.log(queryString);
    // urlParam:URLSearchParams = new URLSearchParams(window.location.search);
    // this.brandService.getBrand("panasonic").subscribe((data: Brand)=>{this.targetBrand = data});
  }
}
