import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    username:"",
    password:""
  }

  constructor(private loginservicio: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginservicio.login(this.usuario).subscribe(res =>{
      alert('¡Bienvenido!')},
    err => console.log(err)
    )
  }

}
