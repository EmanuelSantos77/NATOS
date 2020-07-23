import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {

  usuario = {
    codigo: "",
    username: "",
    password: ""
  }

  constructor(private loginservicio: LoginService) { }

  ngOnInit(): void {
  }

  //metodo inciar sesion
  login() {
    this.loginservicio.login(this.usuario).subscribe(res => {
      alert('¡Bienvenido!')
    },
      err => console.log(err)
    )
  }

}
