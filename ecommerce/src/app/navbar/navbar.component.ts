import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  cartItemCount: number = 0;

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
   this.cartService.cartItems$.subscribe(items => {
  this.cartItemCount = items.length;
});

  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
    }
  }
}
