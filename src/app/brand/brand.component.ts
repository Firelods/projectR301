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
  loaded: boolean = false;

  constructor (private brandService: BrandService){
    var currentUrl = new URL(window.location.href);
    // console.log(currentUrl.searchParams.get('brand'));
    let brandValue = currentUrl.searchParams.get('brand');
    if (brandValue != null) {
      this.brandService.getBrand(brandValue).subscribe((data: Brand) => {
        this.targetBrand = data;
        this.loaded = true;
        console.log(data);
      });
    }
  }

}
