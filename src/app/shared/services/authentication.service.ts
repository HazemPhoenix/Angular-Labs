import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  login() {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
