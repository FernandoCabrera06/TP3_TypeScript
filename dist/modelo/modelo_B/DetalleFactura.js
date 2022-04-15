"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFactura = void 0;
class DetalleFactura {
    constructor(cantidad, articulo) {
        this.cantidad = cantidad;
        this.subTotal = 0;
        this.articulo = articulo;
    }
    calcularSubTotal() {
        if (this.articulo) {
            this.subTotal = (this.cantidad * this.articulo.precio);
        }
    }
}
exports.DetalleFactura = DetalleFactura;
