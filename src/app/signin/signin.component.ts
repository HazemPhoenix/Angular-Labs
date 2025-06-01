import { authGuardGuard } from './../guards/auth-guard.guard';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signin',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private authServ: AuthenticationService
  ) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.authServ.login();
      this.router.navigate(['/']);
    } else {
      console.log('Form is invalid');
    }
  }
}
