import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product!: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) {
    if (history.state.product == undefined) {
      // use product service to get product by id with query params
      this.route.queryParams.subscribe(params => {
        this.productService.getProductById(params['productId']).subscribe((data: Product) => {
          this.product = data;
        })
      });
    }
    else {
      this.product = history.state.product;
    }
  }
  ngOnInit(): void {

  }
  addToCart() {
    this.cartService.addToCart(this.product.id, 1).subscribe((data) => {
      if (data.message == 'Product added to cart') {
        alert('Product added to cart');
      }
      console.log(data);
    });
  }
}
