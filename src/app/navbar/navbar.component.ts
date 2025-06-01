import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  cartItemCount = 0;
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login clicked');
    this.router.navigate(['/signin']);
  }

  onSignup() {
    console.log('Signup clicked');
    this.router.navigate(['/signup']);
  }

  onCartClick() {
    console.log('Cart clicked');
    this.router.navigate(['/cart']);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
