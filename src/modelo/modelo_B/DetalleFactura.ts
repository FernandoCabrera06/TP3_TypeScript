import { Factura } from "./Factura";
import { Articulo } from "./Articulo";

export class DetalleFactura{
     cantidad: number;
     subTotal: number;
     factura: Factura;
     articulo: Articulo;


  constructor(
    cantidad: number, 
    subTotal: number, 
    factura: Factura, 
    articulo: Articulo
) {
    this.cantidad = cantidad
    this.subTotal = subTotal
    this.factura = factura
    this.articulo = articulo
  }
   

    public calcularSubTotal(){
        this.subTotal=(this.cantidad * this.articulo.precio);
    }
}