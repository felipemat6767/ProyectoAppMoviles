import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ElementosService } from '../services/elementos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage  {
  get cursos (){
    return this.elementoService.cursosObtener
  }
  searchText: string = "";
  elementos: ElementosService[] = []
  constructor(private elementoService: ElementosService, private router: Router) { }

  irAHome(){
    this.router.navigate(["/access/catalogo"])
  }
}
