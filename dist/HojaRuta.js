"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HojaRuta = void 0;
class HojaRuta {
    constructor(fecha, numero) {
        this.detalles = [];
        this.fecha = fecha;
        this.numero = numero;
    }
    calcularTotalKilometros() {
        var kmTotales = 0;
        this.detalles.forEach((element) => {
            kmTotales += element.kmRegreso - element.kmSalida;
        });
        return kmTotales;
    }
}
exports.HojaRuta = HojaRuta;
