import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.signup(this.email, this.password).subscribe(
      (result) => {
        if (result.success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
