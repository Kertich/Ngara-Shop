import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserInterface } from '../interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  form!: FormGroup
  personalDetails!: FormGroup

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
    
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
     
    })
  }

  submitForm(): void {
   
    // alert('Welcome to Ngara Shop.');

    this.userService.signUp(this.form.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['']);
    })

  }

}