import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterationServiceService {
  constructor() {}
  isLoggedIn: boolean = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
