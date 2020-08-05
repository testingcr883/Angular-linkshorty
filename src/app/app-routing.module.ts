import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
   { path: 'products', component: ProductComponent },
   { path: '', component: DashboardComponent },
   { path: 'categories', component: CategoriesComponent },
   { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
