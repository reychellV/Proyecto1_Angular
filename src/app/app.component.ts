import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clase_01';


  cambioText(){
    this.title = 'Adios Clase_01'
  }
}
