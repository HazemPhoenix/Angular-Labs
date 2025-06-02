import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuardGuard } from './shared/guards/auth-guard.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (p) => p.ProductsComponent
      ),
  },
  {
    path: 'products/:productId',
    loadComponent: () =>
      import('./pages/product-details/product-details.component').then(
        (p) => p.ProductDetailsComponent
      ),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./pages/auth/signin/signin.component').then(
        (m) => m.SigninComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/auth/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((m) => m.CartComponent),
    canActivate: [authGuardGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
