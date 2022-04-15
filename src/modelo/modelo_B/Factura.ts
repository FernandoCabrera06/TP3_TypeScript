import {Cliente} from './Cliente';
import { DetalleFactura } from './DetalleFactura';

export class Factura {
     letra: string;
     numero: number;
     recargo: number;
     tipoPago: string;
     totalItems: number;
     totalFinal: number;
     fecha: Date;
     detallesFactura: Array<DetalleFactura>;

  constructor(
    letra: string, 
    numero: number, 
    recargo: number, 
    tipoPago: string,
    fecha: Date,
    detallesFactura: Array<DetalleFactura>
) {
    this.letra = letra
    this.numero = numero
    this.recargo = recargo
    this.tipoPago = tipoPago
    this.totalItems = 0;
    this.totalFinal = 0;
    this.fecha = fecha
    this.detallesFactura=detallesFactura
  }

  //relaciones
  cliente: Cliente | undefined;
  
   

    public setTipoPago(tipoPago: string) {
        if(tipoPago.toUpperCase() == "E" || 
           tipoPago.toUpperCase() == "TD" ||
           tipoPago.toUpperCase() == "TC" ||
           tipoPago.toUpperCase() == "CC" ||
           tipoPago.toUpperCase() == "TR"){
            this.tipoPago = tipoPago;
        }else{
            console.log("Tipo de pago invalido");
        } 
    }

    public calcularTotalItems() {
        let total: number = 0;
        
        for(let i = 0; i < this.detallesFactura.length; i++){
            this.detallesFactura[i].calcularSubTotal();
            total += this.detallesFactura[i].subTotal;
        }
        this.totalItems=total;
    }

    public calcularTotalFinal() {
        this.calcularTotalItems();
        let total: number = this.totalItems;
        total += this.recargo;
        this.totalFinal=total;
    }
}