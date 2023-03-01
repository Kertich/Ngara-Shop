import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component:HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminpageComponent },
  { path: 'cart', component: CartComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
