import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginOneComponent } from './login-one/login-one.component';

const routes: Routes = [
  { path:'', component: LoginComponent }, /*ruta del login*/
  { path:'dashboard', component: DashboardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'loginOne', component: LoginOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
