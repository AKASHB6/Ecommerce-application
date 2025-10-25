import { Component } from '@angular/core';

interface Product {
  title: string;
  imageUrl: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [
    {
      title: 'Bangeles',
      imageUrl: 'https://i.pinimg.com/736x/b5/3b/60/b53b601ee88fb260f287bd950b8fdd81.jpg',
      price: 1999,
      description: 'A beautiful saree perfect for festive occasions.'
    },
    {
      title: 'Peplum-Top',
      imageUrl: 'https://i.pinimg.com/736x/eb/99/28/eb992842852f2e46bb4b661acafbc9da.jpg',
      price: 8999,
      description: 'Luxury wrist watch with timeless style.'
    },
    {
      title: 'Saree',
      imageUrl: 'https://i.pinimg.com/736x/5d/27/8a/5d278abba91c4f50dccc8a4b339740dc.jpg',
      price: 79999,
      description: 'Latest iPhone – sleek and powerful for modern use. A beautiful saree perfect for festive occasions.'
    },
    {
      title: 'Watch',
      imageUrl: 'https://i.pinimg.com/736x/a8/6b/17/a86b17cd64cf9d3e2201565f5e590e66.jpg',
      price: 5999,
      description: 'Luxury wrist watch with timeless style.'
    },
    {
      title: 'Iphone',
      imageUrl: 'https://i.pinimg.com/736x/cb/2a/d0/cb2ad0bbc24149758f88797d22b54ab7.jpg',
      price: 3499,
      description: 'Latest iPhone – sleek and powerful for modern use.'
    },
    {
      title: 'Home-decor',
      imageUrl: 'https://i.pinimg.com/1200x/2a/71/c0/2a71c034b2a7969aecfc0531d7c24b6c.jpg',
      price: 49999,
      description: 'Elegant home decor to enhance your living space.'
    },
    {
      title: 'Men-jeans',
      imageUrl: 'https://i.pinimg.com/736x/c2/78/dd/c278dd132d210c10307edf37261901da.jpg',
      price: 35999,
      description: 'Comfortable and stylish jeans for men'
    },
    {
      title: 'Chair',
      imageUrl: 'https://i.pinimg.com/736x/e9/17/b5/e917b5fa1fa4466ddd3756a3277513b5.jpg',
      price: 2999,
      description: 'Modern chair to complement your home or office.'
    }
  ];

  showDetail = false;
  selectedProduct!: Product;

  openImageDetail(product: Product) {
    this.selectedProduct = product;
    this.showDetail = true;
  }

  closeImageDetail() {
    this.showDetail = false;
  }

  addToCart(product: Product) {
    alert(`${product.title} added to cart!`);
    // Implement actual add-to-cart logic here, if needed
  }
}
