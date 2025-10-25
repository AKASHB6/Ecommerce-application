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
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Boys T-Shirt Pack',
      price: 699,
      img: 'https://i.pinimg.com/1200x/02/97/f0/0297f09cbd5b79efbf143c79eda706ec.jpg',
      description: 'Bright and fun T-shirts for boys.',
      category: 'T-shirt'
    },
    {
      id: 2,
      name: 'Girls Party Dress',
      price: 1599,
      img: 'https://i.pinimg.com/1200x/94/81/b6/9481b61819d5c9855ded7fe64bef10ed.jpg',
      description: 'Cute party dress for girls.',
      category: 'Dress'
    },
    {
      id: 3,
      name: 'Kids Sneakers',
      price: 1299,
      img: 'https://i.pinimg.com/1200x/64/5a/d0/645ad0901101b2406d1797e70dfa941c.jpg',
      description: 'Comfortable sneakers for kids.',
      category: 'Shoes'
    },
    {
      id: 4,
      name: 'Toys Set',
      price: 999,
      img: 'https://i.pinimg.com/736x/5d/3e/be/5d3ebe0b34faeb58b396a356b3e56b38.jpg',
      description: 'Fun toy set for kids.Teddy bear',
      category: 'Toys'
    },
    {
      id: 5,
      name: 'Girls Jeans',
      price: 899,
      img: 'https://i.pinimg.com/1200x/ba/77/de/ba77de073065801d44f848a7167b18c9.jpg',
      description: 'Stylish jeans for girls.',
      category: 'Jeans'
    },
    {
      id: 6,
      name: 'Boys Shorts',
      price: 499,
      img: 'https://i.pinimg.com/736x/76/2a/94/762a945d4740a1357d1d0e4257b86bff.jpg',
      description: 'Comfortable shorts for boys.',
      category: 'Shorts'
    }
  ];

  selectedCategory: string = 'All';

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
