import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private http: HttpClient) { }
  private tokenKey = 'token';
  error=false
  errorMessage=''

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    let user: Login = this.loginForm.value;
    // const password = this.loginForm.value.password;
    this.authService.loginUser(user).subscribe(
      (response: Login) => {
        console.log(response);

        localStorage.setItem(this.tokenKey, response.JWT)
        this.authService.setLoginTrue()
        this.router.navigate(['/home'])
        
      },
      (error) => { 
        this.error=true;
        this.errorMessage = error.error;
        console.log(error.error);
        
      }
      
      )
    
    // this.authService.login(email, password)
    //   .subscribe((response:{success: boolean}) => {
    //     if (response.success) {
    //       this.router.navigate(['/dashboard']);
    //     } else {
    //       alert('Login failed. Please try again.');
    //     }
    //   });

      //  const body = { email, password };

    // this.http.post('http://localhost:3000/login', body).subscribe((data) => {
    //   console.log(data);
    // });
      
  }
}

