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
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Casual Blue T-Shirt',
      price: 599,
      img: 'https://i.pinimg.com/1200x/5d/fd/8e/5dfd8eb07ff15fd9721a94b3a6e8c62f.jpg',
      description: 'Comfortable cotton blue t-shirt for casual wear.',
      category: 'T-shirt'
    },
    {
      id: 2,
      name: 'Graphic Print T-Shirt',
      price: 799,
      img: 'https://i.pinimg.com/736x/6c/33/ae/6c33ae3f13651685475078512d17b2d8.jpg',
      description: 'Trendy graphic print t-shirt made from organic cotton.',
      category: 'T-shirt'
    },
    {
      id: 3,
      name: 'Classic White Shirt',
      price: 1099,
      img: 'https://i.pinimg.com/736x/29/86/8a/29868aa665d59fb59e4ddf924c90c674.jpg',
      description: 'Elegant white shirt suitable for formal occasions.',
      category: 'Shirt'
    },
    {
      id: 4,
      name: 'Slim Fit Jeans',
      price: 1699,
      img: 'https://i.pinimg.com/736x/85/c0/28/85c028f0e6c4b2793900b0a40ef06dc8.jpg',
      description: 'Stylish slim fit jeans made with stretchable fabric.',
      category: 'Jeans'
    },
    {
      id: 5,
      name: 'Men\'s Chronograph Watch',
      price: 4999,
      img: 'https://i.pinimg.com/736x/7e/68/53/7e685344f6dca5ca39c2430fd58fa35a.jpg',
      description: 'Sporty watch with chronograph and leather strap.',
      category: 'Watch'
    },
    {
      id: 6,
      name: 'Running Shoes',
      price: 2199,
      img: 'https://i.pinimg.com/736x/54/74/78/547478a641e0cba5fff07ace7d3d89d2.jpg',
      description: 'Lightweight running shoes designed for comfort and speed.',
      category: 'Shoe'
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
