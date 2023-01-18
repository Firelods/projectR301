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
    console.log(this.addProductForm.value.imageURL)
    this.productService.addProduct(new Product(-1,this.addProductForm.value.price*1.2,this.addProductForm.value.price,this.addProductForm.value.title,this.addProductForm.value.description,-1,this.addProductForm.value.imageurl,this.addProductForm.value.brand)).subscribe((data: Product) => {
      this.listProduct.push(data);
      this.makeSearch = false;
      this.addProduct = false;
      alert("Produit ajouté avec succès");
    });
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((data: Product) => {
      this.listProduct = this.listProduct.filter((product) => product.id != id);
    });
  }
}
