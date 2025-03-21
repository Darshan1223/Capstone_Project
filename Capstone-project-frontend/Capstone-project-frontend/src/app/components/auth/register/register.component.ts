import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { firstname: '', email: '', password: '' ,lastname:'',location:''};
  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      (response: any) => {
        console.log(response);
        if (response && response.id) { 
          this.successMessage = 'Registration successful. Please log in.';
          setTimeout(() => this.router.navigate(['/login']), 2000);}
         else {
          this.errorMessage = response.message || 'Registration failed.';
        }
      },
      error => {
        this.errorMessage = 'Registration failed. Try again later.';
      }
    );
  }
}
