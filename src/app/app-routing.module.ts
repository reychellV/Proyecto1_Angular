import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginOneComponent } from './login-one/login-one.component';
import { ListaComponent } from './lista/lista.component';
import { FuegoComponent } from './fuego/fuego.component';
import { AguaComponent } from './agua/agua.component';
import { HierbaComponent } from './hierba/hierba.component';

const routes: Routes = [
  //{ path:'', component: LoginComponent }, /*ruta del login*/
  { path: '', component: LoginOneComponent},
  { path:'dashboard', component: DashboardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'fuego', component: FuegoComponent},
  { path: 'agua', component: AguaComponent},
  { path: 'hierba', component: HierbaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
