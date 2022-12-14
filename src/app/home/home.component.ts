import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../service/product.service';
import { ArrayType } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listProducts: Product[] = [];
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
      // this.listProducts.forEach((product: Product) => {
      //   product.brand =
      // });
    });
  }

  getArrayFromNumberBlueStar(number: number): string[] {
    var nbStar = parseInt(number.toString());

    return new Array(nbStar).fill("0");
  }
  getArrayFromNumberGrayStar(number: number): string[] {
    var nbStar = parseInt(number.toString());
    return new Array(5 - nbStar).fill("0");
  }

  goToProduct(product: Product) {
    this.router.navigate(['/product'], { state: { product: product }, queryParams: { productId: product.id } });
  }
}
