import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-element-page',
  templateUrl: './element-page.page.html',
  styleUrls: ['./element-page.page.scss'],
})
export class ElementPagePage  {
  nombre: String = ""
  poder: String = ""
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe(params =>{
       if(this.router.getCurrentNavigation()?.extras?.state) {
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.["nombre"];
        this.poder = this.router.getCurrentNavigation()?.extras?.state?.["precio"]; 
       } else{
        this.router.navigate(["/home"])  
       }
    }) 
  }
  irACatalogo(){
    this.router.navigate(["/access/catalogo"])
  }
}
