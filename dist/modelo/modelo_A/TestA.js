"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestA = void 0;
const Vehiculo_1 = require("./Vehiculo");
const Detalle_1 = require("./Detalle");
const HojaRuta_1 = require("./HojaRuta");
class TestA {
    static main() {
        let vehiculo = new Vehiculo_1.Vehiculo("AC 729 SL", "Fiat", "Argo Drive 1.3");
        let listaDetalles = [];
        let detalle1 = new Detalle_1.Detalle(250, 500, 3, 4, 5, 8);
        let detalle2 = new Detalle_1.Detalle(500, 700, 3, 4, 5, 8);
        let detalle3 = new Detalle_1.Detalle(700, 950, 3, 4, 5, 8);
        listaDetalles.push(detalle1);
        listaDetalles.push(detalle2);
        listaDetalles.push(detalle3);
        let hojaRuta1 = new HojaRuta_1.HojaRuta(new Date("10/13/2022"), 1348);
        hojaRuta1.detalles = listaDetalles;
        vehiculo.hojasRutas.push(hojaRuta1);
        let listaDetalles2 = [];
        let detalle4 = new Detalle_1.Detalle(1, 2, 3, 4, 5, 8);
        let detalle5 = new Detalle_1.Detalle(1, 2, 3, 4, 5, 8);
        let detalle6 = new Detalle_1.Detalle(1, 2, 3, 4, 5, 8);
        listaDetalles2.push(detalle4);
        listaDetalles2.push(detalle5);
        listaDetalles2.push(detalle6);
        let hojaRuta2 = new HojaRuta_1.HojaRuta(new Date("05/03/2020"), 1234);
        hojaRuta2.detalles = listaDetalles2;
        vehiculo.hojasRutas.push(hojaRuta2);
        let listaDetalles3 = [];
        let detalle7 = new Detalle_1.Detalle(1, 2, 3, 4, 5, 8);
        let detalle8 = new Detalle_1.Detalle(1, 2, 3, 4, 5, 8);
        let detalle9 = new Detalle_1.Detalle(1, 2, 3, 4, 5, 8);
        listaDetalles3.push(detalle7);
        listaDetalles3.push(detalle8);
        listaDetalles3.push(detalle9);
        let hojaRuta3 = new HojaRuta_1.HojaRuta(new Date("05/03/1988"), 1288);
        hojaRuta3.detalles = listaDetalles3;
        vehiculo.hojasRutas.push(hojaRuta3);
        console.log(`Los kilometros recorridos para la hoja de Ruta 1 son: ${hojaRuta1.calcularTotalKilometros()}`);
        console.log(`Los kilometros recorridos para el vehiculo 1 son: ${vehiculo.calcularTotalKilometrosRecorridos(new Date("05/03/2019"), new Date("05/03/2023"))}`);
    }
}
exports.TestA = TestA;
