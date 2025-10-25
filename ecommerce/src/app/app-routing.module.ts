import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your component classes here
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { HomeKitchenComponent } from './home-kitchen/home-kitchen.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'jewellery', component: JewelleryComponent },
  { path: 'home-kitchen', component: HomeKitchenComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'cart', component: CartComponent },

  { path: '**', redirectTo: '/home' } ,// Handle undefined routes
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
