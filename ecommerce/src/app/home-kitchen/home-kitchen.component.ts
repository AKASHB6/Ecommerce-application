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
  selector: 'app-home-kitchen',
  templateUrl: './home-kitchen.component.html',
  styleUrls: ['./home-kitchen.component.css']
})
export class HomeKitchenComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Dining Table Set',
      price: 29999,
      img: 'https://i.pinimg.com/736x/cb/ec/c9/cbecc944d29cf6050edc9b98eca44181.jpg',
      description: 'Elegant wooden dining table set for six.',
      category: 'Furniture'
    },
    {
      id: 2,
      name: 'Non-stick Cookware Set',
      price: 7999,
      img: 'https://i.pinimg.com/1200x/64/bd/9e/64bd9e383a08a00d35b6eb50536505f3.jpg',
      description: 'Durable non-stick cookware set with lids.',
      category: 'Kitchenware'
    },
    {
      id: 3,
      name: 'Decorative Wall Clock',
      price: 2499,
      img: 'https://i.pinimg.com/736x/64/23/2e/64232eade3980b20ff0ef6b3bc269bbb.jpg',
      description: 'Modern aesthetic wall clock for living room.',
      category: 'Decor'
    },
    {
      id: 4,
      name: 'LED Floor Lamp',
      price: 3499,
      img: 'https://i.pinimg.com/1200x/03/cc/9a/03cc9a3cc619ebeee21769f920d5930c.jpg',
      description: 'Stylish LED floor lamp with adjustable brightness.',
      category: 'Decor'
    },
    {
      id: 5,
      name: 'Kitchen Storage Rack',
      price: 1999,
      img: 'https://i.pinimg.com/1200x/00/4c/c2/004cc237497ae824643fce5a8c885310.jpg',
      description: 'Multi-tier kitchen storage rack with wheels.',
      category: 'Kitchenware'
    },
    {
      id: 6,
      name: 'Wooden Coffee Table',
      price: 8999,
      img: 'https://i.pinimg.com/736x/03/cb/86/03cb863deebd9033440b72f0f1dd02e3.jpg',
      description: 'Compact wooden coffee table with drawer.',
      category: 'Furniture'
    }
  ];

  selectedCategory: string = 'All';
  categories: string[] = ['Furniture', 'Kitchenware', 'Decor'];

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
