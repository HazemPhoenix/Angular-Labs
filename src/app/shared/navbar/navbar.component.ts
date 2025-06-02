import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  cartItemCount = 5;
  isMobileMenuOpen = false;
  isAuthenticated!: boolean;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  private updateAuthenticationStatus() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  onLogin() {
    this.router.navigate(['/signin']);
  }

  onSignup() {
    this.router.navigate(['/signup']);
  }

  onLogout() {
    this.authService.logout();
    this.updateAuthenticationStatus();
    this.router.navigate(['/']);
  }

  onCartClick() {
    this.router.navigate(['/cart']);
  }
}
