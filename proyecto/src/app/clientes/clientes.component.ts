import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes;

  cliente={
    id:"",
    empresa:"",
        nombre:"",
        apellido_paterno:"",
        apellido_materno:"",
        puesto:"",
    rfc:"",
    tipo_persona:""
  }

  constructor(private clienteservicio:ClientesService) { }

  ngOnInit(): void {
    //this.consultartodocliente();
  }

  //metodo guardar empleado
  guardarcliente(){
    this.clienteservicio.insertarCliente(this.cliente)
    .subscribe(res=>{
      alert("El cliente ha sido registrado con éxito")
      //this.limpiarcliente()
    },
    err=> console.log(err))
  }

  //metodo modificar
  modificarcliente(){
    this.clienteservicio.modificarCliente(this.cliente)
    .subscribe(res=>{
      alert("El cliente ha sido modificado con éxito")
      this.consultartodocliente()
      //this.limpiarcliente()
    })
  }

  eliminarcliente(){
    this.clienteservicio.eliminarCliente(this.eliminarcliente)
    .subscribe(res=>{
      alert("El cliente ha sido eliminado con éxito")
      //this.limpiarempleado()
    })
  }

  //metodo consultar
  consultartodocliente(){
      this.clientes=this.clienteservicio.consultartodoCliente();
  }

  //metodo limpiar campos
  /*limpiarcliente(){
    //esto para que se limpien los campos
    this.cliente.id=""
    this.cliente.empresa=""
    this.cliente.nombre=""
    this.cliente.apellido_paterno=""
    this.cliente.apellido_materno=""
    this.cliente.puesto=""
    this.cliente.rfc=""
    this.cliente.tipo_persona=""
  }*/

}
