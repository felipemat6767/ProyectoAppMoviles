import { Component } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
})
export class PerfilPage {
  nombreUsuario: String = ""
  apellidoUsuario: String = ""
  fechaNacimiento: String = ""
  nivelEducativo: String =""
  nombreRecibido: String = ""
  contraseniaRecibida: String = ""
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe(params =>{
       if(this.router.getCurrentNavigation()?.extras?.state) {
        this.nombreRecibido = this.router.getCurrentNavigation()?.extras?.state?.["usuario"];
        this.contraseniaRecibida = this.router.getCurrentNavigation()?.extras?.state?.["password"]; 
       } else{
        this.router.navigate(["/login"])  
       }
    }) 
  }
   limpiar(){
    this.nombreUsuario = ""
    this.apellidoUsuario =""
    this.nivelEducativo =""
    this.fechaNacimiento = ""
   }

   isModalOpen = false;

  abrir(isOpen: boolean) {
    if (this.nombreUsuario.trim() !== "" || this.apellidoUsuario.trim() !== ""){this.isModalOpen = isOpen;}
    else{alert("Nombre y apellido de usuarios no pueden estar vacios.")}}

    acceder(){
      console.log("Click")
      let navigationExtras: NavigationExtras = {
        state: {
          nombre: this.nombreUsuario,
          apellido: this.apellidoUsuario
        },
      }
      this.router.navigate(["/access"], navigationExtras)
    }
}


