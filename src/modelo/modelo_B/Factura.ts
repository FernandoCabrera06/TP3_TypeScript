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
     cliente: Cliente;
     detallesFactura: Array<DetalleFactura> = new Array<DetalleFactura>();

  constructor(
    letra: string, 
    numero: number, 
    recargo: number, 
    tipoPago: string, 
    totalItems: number, 
    totalFinal: number, 
    fecha: Date, 
    cliente: Cliente, 
    detallesFactura: Array<DetalleFactura> 
) {
    this.letra = letra
    this.numero = numero
    this.recargo = recargo
    this.tipoPago = tipoPago
    this.totalItems = totalItems
    this.totalFinal = totalFinal
    this.fecha = fecha
    this.cliente = cliente
    this.detallesFactura = detallesFactura
  }

   

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