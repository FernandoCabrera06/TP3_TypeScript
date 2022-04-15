import { Factura } from "./Factura";
import { Articulo } from "./Articulo";

export class DetalleFactura{
     cantidad: number;
     subTotal: number;
     articulo: Articulo;


  constructor(
    cantidad: number,
    articulo: Articulo
) {
    this.cantidad = cantidad
    this.subTotal = 0;
    this.articulo= articulo;
  }
   
//relaciones
factura: Factura | undefined;


    public calcularSubTotal(){
        if(this.articulo){
        this.subTotal=(this.cantidad * this.articulo.precio);
        }
    }
}