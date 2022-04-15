"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(numero, razonSocial, cuit) {
        //relación
        this.facturas = [];
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
    }
    totalFacturadoXTipoPago(tipoPago) {
        let total = 0;
        for (let factura of this.facturas) {
            if (factura.tipoPago == tipoPago) {
                total += factura.totalFinal;
            }
            else if (factura.tipoPago == null ||
                factura.tipoPago == "" ||
                tipoPago == null ||
                tipoPago == "") {
                total += factura.totalItems;
            }
        }
        return total;
    }
}
exports.Cliente = Cliente;
