import { BrandComponent } from './brand/brand.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'admin', component: AdminPageComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'brand',component: BrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
