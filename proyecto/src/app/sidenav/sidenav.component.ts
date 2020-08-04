import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  entrar=''

  constructor(private loginservicio:LoginService) { }

  ngOnInit(): void {
  }

}
