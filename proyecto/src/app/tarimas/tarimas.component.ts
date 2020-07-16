import { Component, OnInit } from '@angular/core';
import { TarimasService } from '../servicios/tarimas.service'


@Component({
  selector: 'app-tarimas',
  templateUrl: './tarimas.component.html',
  styleUrls: ['./tarimas.component.css']
})
export class TarimasComponent implements OnInit {

  tarimas;

  tarima={
    id:"",
    descripcion:"",
    tipo:"",
    cantidad:"",
    precio:""
  }

  constructor(private tarimaservicio: TarimasService) { }

  ngOnInit(): void {}
  
  //metodo guardar empleado
  guardartarima(){
    this.tarimaservicio.insertarTarima(this.tarima)
    .subscribe(res=>{
      alert("El artículo ha sido registrado con éxito")
      //this.limpiarempleado()
    },
    err=> console.log(err))
  }

  //metodo modificar
  modificartarima(){
    this.tarimaservicio.modificarTarima(this.tarima)
    .subscribe(res=>{
      alert("El artículo ha sido modificado con éxito")
      this.consultartodotarima();
      //this.limpiarempleado()
    })
  }

  //metodo eliminar
  eliminartarima(){
    this.tarimaservicio.eliminarTarima(this.tarima)
    .subscribe(res=>{
      alert("El producto ha sido eliminado con éxito")
      //this.limpiarempleado()
    })
  }

  //metodo consultar
  consultartodotarima(){
      this.tarimas=this.tarimaservicio.consultartodoTarima();
  }

  //metodo limpiar campos
  /*limpiarempleado(){
    //esto para que se limpien los campos
    this.empleado.id=""
    this.empleado.nombre=""
    this.empleado.apellido_paterno=""
    this.empleado.apellido_paterno=""
    this.empleado.puesto=""
    this.empleado.sueldo=""
  }*/


}
