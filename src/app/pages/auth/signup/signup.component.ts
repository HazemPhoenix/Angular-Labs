import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  onSubmit(form: any) {
    if (form.valid && this.passwordsMatch()) {
      this.authService.login();
      this.router.navigate(['/']);
    } else {
      console.log('Form is invalid');
    }
  }

  passwordsMatch(): boolean {
    return this.user.password === this.user.confirmPassword;
  }
}
