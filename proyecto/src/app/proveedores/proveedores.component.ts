import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service'

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores;

  proveedor={
    id:"",
    empresa:"",
    nombre:"",
    apellido_paterno:"",
    apellido_materno:"",
    puesto:"",
    rfc:"",
    tipo_persona:""
  }

  constructor(private proveedorservicio:ProveedoresService) { }

  ngOnInit(): void {
  }

  //metodo guardar empleado
  guardarproveedor(){
    this.proveedorservicio.insertarProveedor(this.proveedor)
    .subscribe(res=>{
      alert("El proveedor ha sido registrado con éxito")
      //this.limpiarempleado()
    },
    err=> console.log(err))
  }

  //metodo modificar
  modificarproveedor(){
    this.proveedorservicio.modificarProveedor(this.proveedor)
    .subscribe(res=>{
      alert("El proveedor ha sido modificado con éxito")
      this.consultartodoproveedor();
      //this.limpiarempleado()
    })
  }

  //metodo eliminar
  eliminarproveedor(){
    this.proveedorservicio.eliminarProveedor(this.proveedor)
    .subscribe(res=>{
      alert("El proveeedor ha sido eliminado con éxito")
      //this.limpiarempleado()
    })
  }

  //metodo consultar
  consultartodoproveedor(){
      this.proveedores=this.proveedorservicio.consultartodoProveedor();
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
