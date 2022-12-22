import { BrandService } from './../service/brand.service';
import { Brand } from './../interfaces/brand';
import { Component } from '@angular/core';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  targetBrand: Brand = new Brand(0, '', '', '');

  constructor (private brandService: BrandService){
    //récupération de la marque souhaité dans l'URL
    var currentUrl = new URL(window.location.href);
    let brandValue = currentUrl.searchParams.get('brand');
    //si la marque est présente dans l'URL, on récupère les informations de la marque
    if (brandValue != null) {
      this.brandService.getBrand(brandValue).subscribe((data: Brand) => {
        this.targetBrand = data;
      });
    }
  }

}
