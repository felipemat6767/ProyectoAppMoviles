import { Injectable } from '@angular/core';
interface Cursos {
  nombre: string,
  precio: number,
  descripcion: "Lorem"
}

@Injectable({
  providedIn: 'root'
})
export class ElementosService {
  private cursos: Cursos[] = //Es el array que contiene a todos los personajes
  [
    {
    nombre: "Curso 1",
    precio: 15000,
    descripcion: "Lorem"
    },
    {
      nombre: "Curso 2",
      precio: 14000,
      descripcion: "Lorem"
    },
    {
      nombre: "Curso 3",
      precio: 400,
      descripcion: "Lorem"
    }
  ]
  get cursosObtener (): Cursos[]{ 
    return [...this.cursos] 
}
  constructor() { }
}
