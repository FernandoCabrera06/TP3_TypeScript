import { Vehiculo } from './Vehiculo';
import { Detalle } from './Detalle';

export class HojaRuta {
  fecha: Date;
  numero: number;

  constructor(fecha: Date, numero: number) {
    this.fecha = fecha;
    this.numero = numero;
  }

  //relaciones
  vehiculo: Vehiculo | undefined;
  detalles: Array<Detalle>=[];

  calcularTotalKilometros() {
    var kmTotales: number = 0;
      this.detalles.forEach((element) => {
        kmTotales += element.kmRegreso - element.kmSalida;
      });
    return kmTotales;
  }
}
