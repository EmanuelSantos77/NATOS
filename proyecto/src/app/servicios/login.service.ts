import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //se importa para la comunicaión con la bd 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private Loginurl = "http://localhost:3000/user/login"
  private Registrarurl = "http://localhost:3000/user/registrar"


  constructor(private http: HttpClient) { }

  //metodo registrar usuario
  registrar(usuarios) {
    return this.http.post<any>(this.Registrarurl, usuarios)
  }

  //metodo para inicar sesión
  login(usuarios) {
    return this.http.post<any>(this.Loginurl, usuarios)
  }
}
