import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup ;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login(email, password)
      .subscribe((response:{success: boolean}) => {
        if (response.success) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Login failed. Please try again.');
        }
      });

       const body = { email, password };

    this.http.post('http://localhost:3000/login', body).subscribe((data) => {
      console.log(data);
    });
      
  }
}

