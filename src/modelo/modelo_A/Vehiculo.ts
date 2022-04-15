import { HojaRuta } from "./HojaRuta";
export class Vehiculo {
  patente: string;
  marca: string;
  modelo: string;

  constructor(patente: string, marca: string, modelo: string) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
  }

  //relación
  hojasRutas: Array<HojaRuta>=[];


  calcularTotalKilometrosRecorridos(fechaDesde:Date, fechaHasta:Date) {
    var kmTotales: number = 0;
      this.hojasRutas.forEach((hojaRuta) => {
        if(hojaRuta.fecha> fechaDesde && hojaRuta.fecha<fechaHasta){
          kmTotales+=hojaRuta.calcularTotalKilometros();
        }
      });
    return kmTotales;
  }
}

