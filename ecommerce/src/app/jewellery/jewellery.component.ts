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
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css']
})
export class JewelleryComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Elegant Gold Necklace',
      price: 15999,
      img: 'https://i.pinimg.com/1200x/7c/2c/c2/7c2cc2d46f49b1b536c69b7b42c69539.jpg',
      description: 'Classic 22K gold necklace with intricate design.',
      category: 'Necklaces'
    },
    {
      id: 2,
      name: 'Pearl Drop Earrings',
      price: 6999,
      img: 'https://i.pinimg.com/736x/30/95/76/309576a31aca8e459a2b9b4609f5d1d5.jpg',
      description: 'Sophisticated pearl drop earrings for formal wear.',
      category: 'Earrings'
    },
    {
      id: 3,
      name: 'Diamond Ring',
      price: 24999,
      img: 'https://i.pinimg.com/736x/9f/5d/d7/9f5dd78996691d317aa2d98941ac2802.jpg',
      description: 'Sparkling diamond ring with platinum band.',
      category: 'Rings'
    },
    {
      id: 4,
      name: 'Silver Pendant Necklace',
      price: 7999,
      img: 'https://i.pinimg.com/1200x/da/e3/3e/dae33eef3e5fa26832d3c6a6a97bc6b7.jpg',
      description: 'Beautiful sterling silver pendant necklace.',
      category: 'Necklaces'
    },
    {
      id: 5,
      name: 'Hoop Earrings',
      price: 3999,
      img: 'https://i.pinimg.com/736x/24/ef/64/24ef6422d7bd341b92e409c2eee31692.jpg',
      description: 'Trendy silver hoop earrings to complete your look.',
      category: 'Earrings'
    }
  ];

  selectedCategory: string = 'All';

  categories: string[] = ['Necklaces', 'Earrings', 'Rings'];

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
