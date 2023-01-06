import { LoginService } from './../service/login.service';
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
  constructor(private cartService: CartService, private productService: ProductService, private loginService: LoginService) {
    this.cartService.getCart(this.loginService.getUser().email).subscribe((data: { quantity: number, idProduct: number }[]) => {
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
  updateQuantity(cartItem: CartItem, quantityEvent: Event) {
    var quantity = parseInt((<HTMLInputElement>quantityEvent.target).value);
    if (cartItem.quantity == quantity) {
      return;
    }
    else if (cartItem.quantity < quantity) {
      this.cartService.addToCart(cartItem.product.id, quantity - cartItem.quantity).subscribe();
    }
    else if (quantity == 0) {
      this.cartService.deleteFromCart(cartItem.product.id, cartItem.quantity).subscribe();
      // delete cartItem from cart list
      this.cart.productList.splice(this.cart.productList.indexOf(cartItem), 1);
    }
    else {
      this.cartService.deleteFromCart(cartItem.product.id, cartItem.quantity - quantity).subscribe();
    }
    this.total += (quantity - cartItem.quantity) * cartItem.product.publicPrice;
    cartItem.quantity = quantity;
  }

}
