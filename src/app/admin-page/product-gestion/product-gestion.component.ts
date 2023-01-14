import { FormControl, FormGroup } from '@angular/forms';
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
  addProductForm: FormGroup;
  constructor(private productService: ProductService) {
    this.addProductForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      imageurl: new FormControl(''),
      brand: new FormControl(''),
    });
  }


  searchProduct() {
    var search = (<HTMLInputElement>document.getElementById("search")).value;

    this.productService.searchProduct(search).subscribe((data: Product[]) => {
      this.listProduct = data;
      this.makeSearch = true;
    });
  }
  submitForm() {
    console.log(this.addProductForm.value);

    this.productService.addProduct({
      id: -1, note: -1, title: this.addProductForm.value.title,
      descriptionProduct: this.addProductForm.value.description,
      publicPrice: this.addProductForm.value.price,
      purchasePrice: this.addProductForm.value.price,
      imageURL: this.addProductForm.value.imageURL,
      brand: this.addProductForm.value.brand
    }).subscribe((data: Product) => {
      this.listProduct.push(data);
    });
  }
}
