import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductServiceService } from '../service/product.service';
import { ArrayType } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listProducts: Product[] = [];
  constructor(private productService: ProductServiceService) {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
      // this.listProducts.forEach((product: Product) => {
      //   product.brand =
      // });
     });
  }

  getArrayFromNumber(number: number): string[] {
    return new Array(parseInt(number.toString())).fill("0");
  }
}
