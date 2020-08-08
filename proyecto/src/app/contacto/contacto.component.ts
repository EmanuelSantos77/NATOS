import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css',

]})


export class ContactoComponent implements OnInit {
  asunto: string;
  nombre: string;
  correo: string;
  txt: string;
  url: string;

  getAsunto(val){
    this.asunto = val;
  }
  getNombre(val){
    this.nombre = val;
  }
  getCorreo(val){
    this.correo = val;
  }
  // getNumero(val){
  //   this.numero = val;
  // }
  getTxt(val){
    this.txt = val;
  }

  generateUrl(){
      this.url = "https://api.whatsapp.com/send?phone=+5216644198479"+"&text="+this.txt;
   }





  constructor() {

    
   }

  ngOnInit(): void {

  }
  

}
