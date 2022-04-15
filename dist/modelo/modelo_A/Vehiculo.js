"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(patente, marca, modelo) {
        //relación
        this.hojasRutas = [];
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    calcularTotalKilometrosRecorridos(fechaDesde, fechaHasta) {
        var kmTotales = 0;
        this.hojasRutas.forEach((hojaRuta) => {
            if (hojaRuta.fecha > fechaDesde && hojaRuta.fecha < fechaHasta) {
                kmTotales += hojaRuta.calcularTotalKilometros();
            }
        });
        return kmTotales;
    }
}
exports.Vehiculo = Vehiculo;
