import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ElementosService } from 'src/app/services/elementos.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class CatalogPage{

  constructor(private Service: ElementosService, private router: Router) {}
 
  get cursos (){
    return this.Service.cursosObtener
  }
  nombre: string = "Curso"; 
  precio: string = "10000";

  acceder(){
    console.log("Click")
    let navigationExtras: NavigationExtras = {
      state: {
        nombre: this.nombre,
        precio: this.precio
      },
    }
    this.router.navigate(["/access/element-page"], navigationExtras)
  }
  irALogin(){
    this.router.navigate(["/login"])
  }
}
