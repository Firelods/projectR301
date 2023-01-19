import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductGestionComponent } from './admin-page/product-gestion/product-gestion.component';
import { BrandGestionComponent } from './admin-page/brand-gestion/brand-gestion.component';
import { AccountingComponent } from './accounting/accounting.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    HomeComponent,
    BrandComponent,
    ProductComponent,
    BrandComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    CartComponent,
    PaymentComponent,
    ProductGestionComponent,
    BrandGestionComponent,
    AccountingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
