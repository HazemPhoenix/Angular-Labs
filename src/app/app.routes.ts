import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { authGuardGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((p) => p.ProductsComponent),
  },
  {
    path: 'products/:productId',
    loadComponent: () =>
      import('./product-details/product-details.component').then(
        (p) => p.ProductDetailsComponent
      ),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./signin/signin.component').then((m) => m.SigninComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.component').then((m) => m.SignupComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
    canActivate: [authGuardGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
