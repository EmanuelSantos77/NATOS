import { Component, OnInit, Input, EventEmitter, Output, Injectable} from '@angular/core';

import { CartItem } from '../cart.model';
import { PedidoService } from '../../servicios/pedido.service'
import { CartComponent } from '../cart.component'
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {
  pedidos;
 p =1;
  pedidoo={
    id: 0,
    name: "",
    quantity: 0,
    price: 0,
    // total: 0,
    status: "",
    correo: ""
  }
  correo;

  vacio =true;
  @Input() cartItem: CartItem;
  // @Output() cartItemO: CartItem;
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number
  }>();
  @Output() cartItemChanged = new EventEmitter<{
    productId: number
  }>();  

  onCartItemDeleted(event) {
    const id = event.target.getAttribute('id');
    this.cartItemDeleted.emit({
        productId: id
      });
  }  

  onCartItemChanged(event) {
    const id = event.target.getAttribute('id');
    this.cartItemChanged.emit({
        productId: id
      });    
  }

//   async getCorrero(){
//   const { value: email } = await Swal.fire({
//     title: 'Input email address',
//     input: 'email',
//     inputPlaceholder: 'Enter your email address'
//   })
//   if (email) {
//     Swal.fire(`Entered email: ${email}`)
//     this.correo = email
//   }  
// }

      guardarPedido(){
      this.pedidoServicio.insertarPedido(this.pedidoo)
      .subscribe(res=>{
        this.limpiarPedido()
        this.consultarPedido()
        Swal.fire({
          icon: 'success',
          title: 'Realizado',
          text: 'Pedido realizado con exito',
          // footer: '<a href>Pro</a>'
        })
      },
      err=> Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Pedido no realizado',
        // footer: '<a href>Pro</a>'
      }))
    }
      // metodo consultar
  
      consultarPedido(){
      this.pedidos=this.pedidoServicio.consultarTodoPedido();
  }
    limpiarPedido(){
      //esto para que se limpien los campos
      this.pedidoo.id=0,
      this.pedidoo.name="",
      this.pedidoo.quantity=0,
      this.pedidoo.price=0,
      // this.pedidoo.total=0,
      this.pedidoo.status="",
      this.pedidoo.correo=""
    }


    

  

  constructor(private pedidoServicio:PedidoService) {
 
   }

  ngOnInit() {
    
    // console.log(this.cartItem);
      var correoxD = prompt("Ingresa tu corrreo");
      this.pedidoo.id = this.cartItem.id;
      this.pedidoo.name = this.cartItem.name;
      this.pedidoo.quantity =this.cartItem.quantity;
      this.pedidoo.price= this.cartItem.price
      // if(this.pedidoo.id != 0) this.vacio=false
      // this.pedidoo.total= this.CartComponet.cartTotal;
      this.pedidoo.status="En proceso";
      this.pedidoo.correo=correoxD;
      // console.log(this.pedidoo.id)
      // console.log(this.pedidoo.name)
      // console.log(this.pedidoo.quantity)
      // // console.log(this.pedidoo.total)
      // console.log(this.pedidoo.status)
      console.log(this.pedidoo.correo)
      // console.log(this.pedidoo)
      this.consultarPedido()
    }

  }



