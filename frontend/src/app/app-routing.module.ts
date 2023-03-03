import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', component:HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
 
  { path: 'single', canActivate:[AuthGuardService],component:SingleproductComponent },
  { path: 'admin',component: AdminpageComponent , 
  children:[
    { path: '', component:ProductspageComponent },
    { path: 'users', component:UsersComponent},
  ]},
  { path: 'cart', canActivate:[AuthGuardService], component: CartComponent },
  { path: '**', component:PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
