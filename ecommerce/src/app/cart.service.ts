import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  get cartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }

  addToCart(product: Omit<CartItem, 'quantity'>) {
    const items = [...this.cartItems];
    const existingItem = items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next(items);
  }

  removeItem(productId: number) {
    const items = this.cartItems.filter(item => item.id !== productId);
    this.cartItemsSubject.next(items);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
