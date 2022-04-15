import {HojaRuta} from './HojaRuta';

export class Detalle {
  constructor(
    kmSalida: number,
    kmRegreso: number,
    horaSalida: number,
    horaRegreso: number,
    minutoSalida: number,
    minutoRegreso: number
  ) {
    this.kmSalida = kmSalida;
    this.kmRegreso = kmRegreso;
    this.horaSalida = horaSalida;
    this.horaRegreso = horaRegreso;
    this.minutoSalida = minutoSalida;
    this.minutoRegreso = minutoRegreso;
  }

  kmSalida: number;
  kmRegreso: number;
  horaSalida: number;
  horaRegreso: number;
  minutoSalida: number;
  minutoRegreso: number;

  //relación

  hojaRuta:HojaRuta | undefined;
}
