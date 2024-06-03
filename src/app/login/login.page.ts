import { Component, OnInit } from '@angular/core';
 
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  usuario: string = ""; 
  password: string = "";
 
  constructor(private router: Router) {}  
    ingresar(){
        if(this.usuario == "Felipe" && this.password == "1234") { let navigationExtras: NavigationExtras = {
          state: {
            usuario: this.usuario,
            password: this.password
          },
        }
        this.router.navigate(["perfil"], navigationExtras)
      }
      else(alert("Contrasenia o Usuario incorrectos"))
    }
    goHome(){
      this.router.navigate([""])
    }
}
