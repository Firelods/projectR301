import { Component } from '@angular/core';
import { Cart } from '../interfaces/cart';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Cart = { productList: [] };
  total: number = 0;
  constructor(private cartService: CartService, private productService: ProductService) {
    this.cartService.getCart().subscribe((data: { quantity: number, idProduct: number }[]) => {
      data.forEach((cartItem: { quantity: number, idProduct: number }) => {
        this.productService.getProductById(cartItem.idProduct).subscribe((product: Product) => {
          this.cart.productList.push({ quantity: cartItem.quantity, product: product });
          this.total += cartItem.quantity * product.publicPrice;
        });
      });
    });
  }
  deleteItem(cartItem: CartItem) {
    this.cartService.deleteFromCart(cartItem.product.id, 1).subscribe();
    this.total -= cartItem.product.publicPrice;
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      return;
    } else {
      this.cart.productList.splice(this.cart.productList.indexOf(cartItem), 1);
    }
  }
  orderCart() {
    this.cartService.orderCart().subscribe(response => {
      window.location.href = response.body.url;
    });


  }

}
