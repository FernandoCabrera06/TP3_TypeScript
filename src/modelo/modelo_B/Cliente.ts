import { Factura } from "./Factura";

export class Cliente{
    numero: number;
    razonSocial: string;
    cuit: number;
    


  constructor(
    numero: number, 
    razonSocial: string, 
    cuit: number
) {
    this.numero = numero
    this.razonSocial = razonSocial
    this.cuit = cuit
  }
   
  //relación
  facturas: Array<Factura> =[];


    public totalFacturadoXTipoPago(tipoPago:string){
        let total:number = 0;
        for(let factura of this.facturas){
            if(factura.tipoPago == tipoPago){
                total += factura.totalFinal;
            }else if(factura.tipoPago == null || 
                     factura.tipoPago == "" ||
                     tipoPago == null || 
                     tipoPago == ""){
                total += factura.totalItems;
            }
        }
        return total;
    }
}