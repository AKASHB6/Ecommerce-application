import { Component } from '@angular/core';
import { CartService } from '../cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone SAMSUNG Galaxy',
      price: 15999,
      img: 'https://i.pinimg.com/1200x/e0/69/36/e06936903e3f4f471a16d1dfb0e37455.jpg',
      description: 'Latest 5G smartphone with excellent camera features.',
      category: 'Mobiles'
    },
    {
      id: 2,
      name: 'Laptop Dell Inspiron',
      price: 45999,
      img: 'https://i.pinimg.com/1200x/fe/f7/b3/fef7b3cbaeb59afc974ab04dd20741e6.jpg',
      description: 'High performance laptop for work and gaming.',
      category: 'Laptops'
    },
    {
      id: 3,
      name: 'DSLR Camera',
      price: 29999,
      img: 'https://i.pinimg.com/1200x/bd/2e/d5/bd2ed53301353afd36a3bd1271b1129c.jpg',
      description: 'Capture stunning photos with this DSLR camera.',
      category: 'Cameras'
    },
    {
      id: 4,
      name: 'Wireless Headphones',
      price: 4999,
      img: 'https://i.pinimg.com/736x/cf/49/2c/cf492cadd688997363236616a33852df.jpg',
      description: 'Noise-cancelling wireless headphones with rich sound.',
      category: 'Accessories'
    },
    {
      id: 5,
      name: 'Smartwatch Pro',
      price: 7999,
      img: 'https://i.pinimg.com/1200x/96/f6/79/96f679740714cb14e700edb42ddb8378.jpg',
      description: 'Smartwatch with health tracking and notifications.',
      category: 'Accessories'
    }
  ];

  selectedCategory: string = 'All';

  categories: string[] = ['Mobiles', 'Laptops', 'Cameras', 'Accessories'];

  constructor(private cartService: CartService) {}

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
