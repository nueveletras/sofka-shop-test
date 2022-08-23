import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManagementComponent } from './components/management/management.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: 'full'
  },
  {
    path: "inicio",
    component: HomeComponent
  },
  {
    path: "productos",
    component: ProductsComponent
  },
  {
    path: "administracion",
    component: ManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
