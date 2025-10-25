import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  selectedPaymentMode: string | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item.id);
  }

  clearCart() {
    this.cartService.clearCart();
    this.selectedPaymentMode = null;
  }

  placeOrder() {
    alert(`Order placed with payment mode: ${this.selectedPaymentMode}`);
    // Add your order processing logic here.
    this.clearCart();
  }
}
