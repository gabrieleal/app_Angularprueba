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
  empresa = "metalExploit SA";
  
  //property binding
  disableproperty = false;
  Registrousuraio=false;
  txtReg = "No hay nadie Registrado";

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

  nombrarEmpresa(e:Event){
    this.setEmpresa((<HTMLInputElement>e.target).value);
  }

  // EVENT BINDING
  usuarioRegistrado(event:Event){
    // realiz un casteo del evento al elemnto html para obtener su propiedad value
    if((<HTMLInputElement>event.target).value == "registrarse"){
      this.txtReg = (`usuraio Resgistrado ${this.nombre}`);
    }else{
      this.txtReg = "No hay nadie Registrado";
    }
  }
  ngOnInit(): void {
  }

}
