"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
class Articulo {
    constructor(codigo, denominacion, precio, unidadMedida) {
        //relación
        this.detallesFactura = [];
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }
}
exports.Articulo = Articulo;
