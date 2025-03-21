import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        console.log(response);
        if (response==true) {
          localStorage.setItem('user', JSON.stringify(response.user));
          this.router.navigate(['/products']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      error => {
        this.errorMessage = 'Login failed. Please try again.';
      }
    );
  }
}
