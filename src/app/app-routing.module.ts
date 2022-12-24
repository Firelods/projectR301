import { BrandComponent } from './brand/brand.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
const routes: Routes = [
  {
    path: 'admin', component: AdminPageComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'brand', component: BrandComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'account', component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
