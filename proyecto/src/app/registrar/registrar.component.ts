import { Component, OnInit } from '@angular/core';
import { RegistrarService } from '../servicios/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  usuario={
    codigo:"",
    username:"",
    password:""
  }

  constructor(private registrarservicio:RegistrarService) { }

  ngOnInit(): void {
  }

  insertar(){
    this.registrarservicio.insertar(this.usuario).subscribe(res =>{
      alert("¡Te has registrado con éxito!")
      console.log(res)
    },
    err => console.log(err)
    )
  }

}
