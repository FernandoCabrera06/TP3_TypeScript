"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
class Articulo {
    constructor(codigo, denominacion, precio, unidadMedida, detallesFactura) {
        this.detallesFactura = new Array();
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
        this.detallesFactura = detallesFactura;
    }
}
exports.Articulo = Articulo;
