import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //se importa para la comunicaión con la bd 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private Loginurl = ""

  constructor(private http: HttpClient) { }

  //metodo para inicar sesión
  login(usuarios){
    return this.http.post<any>(this.Loginurl,usuarios)
  }
}
