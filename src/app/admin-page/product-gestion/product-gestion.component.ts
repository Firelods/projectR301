import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-gestion',
  templateUrl: './product-gestion.component.html',
  styleUrls: ['./product-gestion.component.css']
})
export class ProductGestionComponent {
  listProduct: Product[] = [];
  makeSearch: boolean = false;
  addProduct: boolean = false;
  constructor(private productService:ProductService) { }


  searchProduct() {
    var search = (<HTMLInputElement>document.getElementById("search")).value;

    this.productService.searchProduct(search).subscribe((data: Product[]) => {
      this.listProduct = data;
      this.makeSearch = true;
    });
  }
}
