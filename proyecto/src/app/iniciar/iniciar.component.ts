import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {
  
  usuario={
    username:"",
    password:""
  }

  constructor(private loginservicio:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loginservicio.login(this.usuario).subscribe(res =>{
      alert('¡Bienvenido!')
    localStorage.setItem('token',res.jwtoken) //backend
    this.router.navigate(['/inicio'])
  },
    err => console.log(err)
    )
  }

}
