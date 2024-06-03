import { Component } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage {
  nombreRecibido: String = ""
  apellidoRecibido: String = ""
  constructor(private router: Router, private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe(params =>{
       if(this.router.getCurrentNavigation()?.extras?.state) {
        this.nombreRecibido = this.router.getCurrentNavigation()?.extras?.state?.["nombre"];
        this.apellidoRecibido = this.router.getCurrentNavigation()?.extras?.state?.["apellido"]; 
       } else{
        this.router.navigate(["/login"])  
       }
    }) 
  }

}
