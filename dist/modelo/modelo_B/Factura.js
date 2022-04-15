"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
class Factura {
    constructor(letra, numero, recargo, tipoPago, fecha, detallesFactura) {
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.totalItems = 0;
        this.totalFinal = 0;
        this.fecha = fecha;
        this.detallesFactura = detallesFactura;
    }
    setTipoPago(tipoPago) {
        if (tipoPago.toUpperCase() == "E" ||
            tipoPago.toUpperCase() == "TD" ||
            tipoPago.toUpperCase() == "TC" ||
            tipoPago.toUpperCase() == "CC" ||
            tipoPago.toUpperCase() == "TR") {
            this.tipoPago = tipoPago;
        }
        else {
            console.log("Tipo de pago invalido");
        }
    }
    calcularTotalItems() {
        let total = 0;
        for (let i = 0; i < this.detallesFactura.length; i++) {
            total += this.detallesFactura[i].subTotal;
        }
        this.totalItems = total;
    }
    calcularTotalFinal() {
        this.calcularTotalItems();
        let total = this.totalItems;
        total += this.recargo;
        this.totalFinal = total;
    }
}
exports.Factura = Factura;
