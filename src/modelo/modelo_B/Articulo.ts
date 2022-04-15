import { DetalleFactura } from "./DetalleFactura";

export class Articulo{
    codigo: number;
    denominacion: string;
    precio: number;
    unidadMedida: string;
    detallesFactura: Array<DetalleFactura> = new Array<DetalleFactura>();

  constructor(
    codigo: number, 
    denominacion: string, 
    precio: number, 
    unidadMedida: string, 
    detallesFactura: Array<DetalleFactura> 
) {
    this.codigo = codigo
    this.denominacion = denominacion
    this.precio = precio
    this.unidadMedida = unidadMedida
    this.detallesFactura = detallesFactura
  }

}