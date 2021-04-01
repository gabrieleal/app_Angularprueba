import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit  {
  private nombre = "Mario";
  private apellido = "Perex";
  private edad = 25;
  private empresa = "metalExploit SA";
  
  constructor() { }

  getNombre():string{
    return this.nombre;
  }
  getApellido():string{
    return this.apellido;
  }
  getEdad():number{
    return this.edad;
  }
  getEmpresa():string{
    return this.empresa;
  }

  setNombre( e:string):void{
    this.nombre=e;
  }
  setApellido(e:string):void{
    this.apellido = e;
  }
  setEdad(e:number):void{
    this.edad = e;
  }
  setEmpresa(e:string):void{
    this.empresa = e;
  }


  ngOnInit(): void {
  }

}
