import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductspageComponent } from './productspage/productspage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductspageComponent,
    AuthenticationComponent,
    AdminpageComponent,
    SingleproductComponent,
    CartComponent,
    CheckoutComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutUsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
