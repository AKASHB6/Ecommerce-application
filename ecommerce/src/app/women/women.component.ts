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
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Floral Summer Dress',
      price: 1299,
      img: 'https://i.pinimg.com/1200x/51/b5/81/51b581939a92b308f4a5e9cd7e017824.jpg',
      description: 'Light and breezy floral dress perfect for summer.',
      category: 'Dress'
    },
    {
      id: 2,
      name: 'Elegant Evening Gown',
      price: 3999,
      img: 'https://i.pinimg.com/736x/b3/1f/5a/b31f5a18bdd7f9f18409a5b26e9c0032.jpg',
      description: 'Stylish evening gown for special occasions.',
      category: 'Dress'
    },
    {
      id: 3,
      name: 'Casual Crop Top',
      price: 699,
      img: 'https://i.pinimg.com/736x/f7/5d/55/f75d5508fe14c84fb83dc608972e08a4.jpg',
      description: 'Comfortable and trendy crop top for casual wear.',
      category: 'Top'
    },
    {
      id: 4,
      name: 'Denim Jeans',
      price: 1599,
      img: 'https://i.pinimg.com/736x/c6/b5/f1/c6b5f1ea07cbefa6deb86528278ccdd4.jpg',
      description: 'Classic fit denim jeans with slight stretch.',
      category: 'Jeans'
    },
    {
      id: 5,
      name: 'Women\'s Stylish Watch',
      price: 3699,
      img: 'https://i.pinimg.com/1200x/2f/a8/2e/2fa82ea3b118054689825ddb20fb1008.jpg',
      description: 'Elegant watch with leather strap and minimalist design.',
      category: 'Watch'
    },
    {
      id: 6,
      name: 'Comfortable Sneakers',
      price: 2199,
      img: 'https://i.pinimg.com/736x/26/b7/16/26b71606d83515c8251795917520c6bc.jpg',
      description: 'Lightweight sneakers for all-day comfort.',
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
