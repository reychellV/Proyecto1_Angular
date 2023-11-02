import { Component } from '@angular/core';

@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.component.html',
  styleUrls: ['./login-one.component.css']
})
export class LoginOneComponent {
  usuario: String = '';
  contrasena: String = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  validacion() {
    console.log(this.contrasena)
    console.log(this.usuario)
    if (this.usuario != '' && this.contrasena != '') {
      alert("Bienvenido");
    }
    else {
      alert("Debe llenar todos los campos   ");
    }
  }
}
