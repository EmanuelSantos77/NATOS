import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  usuario={
    codigo: "",
    nombre: "",
    email:"",
    password:""
  }

  constructor(private loginservicio:LoginService) { }

  ngOnInit(): void {
  }

  insertar(){
    this.loginservicio.registrar(this.usuario).subscribe(res =>{
      console.log(res)
    },
    err => console.log(err)
    )
  }

}
