"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleFactura = void 0;
class DetalleFactura {
    constructor(cantidad, subTotal, factura, articulo) {
        this.cantidad = cantidad;
        this.subTotal = subTotal;
        this.factura = factura;
        this.articulo = articulo;
    }
    calcularSubTotal() {
        this.subTotal = (this.cantidad * this.articulo.precio);
    }
}
exports.DetalleFactura = DetalleFactura;
