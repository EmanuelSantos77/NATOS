import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../servicios/empleados.service'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados;

  empleado={
    id:"",
    nombre:"",
    apellido_paterno:"",
    apellido_materno:"",
    puesto:"",
    sueldo:""
  }

  constructor(private empleadoservicio:EmpleadosService) { }

  ngOnInit(): void {
  }

  //metodo guardar empleado
  guardarempleado(){
    this.empleadoservicio.insertarEmpleado(this.empleado)
    .subscribe(res=>{
      alert("Libro guardado")
    },
    err=> console.log(err))
  }

}
