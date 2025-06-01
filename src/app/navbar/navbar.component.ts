import { authGuardGuard } from './../guards/auth-guard.guard';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterationServiceService } from '../services/registeration-service.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  cartItemCount = 5;
  isMobileMenuOpen = false;

  constructor(
    private router: Router,
    private regService: RegisterationServiceService
  ) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  onLogin() {
    console.log('Login clicked');
    this.regService.login();
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
}
