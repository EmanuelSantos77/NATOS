import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { CopyComponent } from './copy/copy.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { TarimasComponent } from './tarimas/tarimas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';


const routes: Routes = [
  {path: 'Inicio', component:InicioComponent},
  {path: 'Nosotros', component: NosotrosComponent},
  {path: 'Ofertas', component:OfertasComponent},
  {path: 'Catalogo', component:CatalogoComponent},
  {path: 'Sugerencias', component:SugerenciasComponent},
  {path: 'Contacto', component:ContactoComponent},
  {path: 'Iniciar', component:IniciarComponent},
  {path: 'Registrar', component:RegistrarComponent},
  {path: 'Copy', component:CopyComponent},
  {path: 'Empleados', component:EmpleadosComponent},
  {path: 'Tarimas', component:TarimasComponent},
  {path: 'Clientes', component: ClientesComponent},
  {path: 'Proveedores', component:ProveedoresComponent },
  
  






  //Comodines de redireccionamiento
  {path: '', redirectTo:'Inicio' , pathMatch:'full'},
  {path: '**', redirectTo:'Inicio' , pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
