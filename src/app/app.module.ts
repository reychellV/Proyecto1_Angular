import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginOneComponent } from './login-one/login-one.component';
import { ListaComponent } from './lista/lista.component';
import { FuegoComponent } from './fuego/fuego.component';
import { AguaComponent } from './agua/agua.component';
import { HierbaComponent } from './hierba/hierba.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    LoginOneComponent,
    ListaComponent,
    FuegoComponent,
    AguaComponent,
    HierbaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
