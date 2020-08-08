import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
   { path: 'products', component: ProductComponent },
   { path: '', component: DashboardComponent },
   { path: 'categories', component: CategoriesComponent },
   { path: 'users', component: UsersComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registration', component: RegistrationComponent }
  //  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
