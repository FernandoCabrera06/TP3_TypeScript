"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestB = void 0;
const Articulo_1 = require("./modelo/modelo_B/Articulo");
const DetalleFactura_1 = require("./modelo/modelo_B/DetalleFactura");
const Factura_1 = require("./modelo/modelo_B/Factura");
const Cliente_1 = require("./modelo/modelo_B/Cliente");
class TestB {
    static main() {
        let cliente1 = new Cliente_1.Cliente(32, "Fernando Cabrera", 20398412);
        let articulo1 = new Articulo_1.Articulo(98, "Harina", 150, "kg");
        let articulo2 = new Articulo_1.Articulo(23, "Queso", 250, "kg");
        let articulo3 = new Articulo_1.Articulo(96, "Salsa", 80, "kg");
        let articulo4 = new Articulo_1.Articulo(54, "Condimento", 100, "kg");
        let articulo5 = new Articulo_1.Articulo(38, "Jamón", 200, "kg");
        let detalleFactura1 = new DetalleFactura_1.DetalleFactura(3, articulo1); //3*150=450
        let detalleFactura2 = new DetalleFactura_1.DetalleFactura(2, articulo3); //2*80=240
        let arrayDetalles1 = [];
        arrayDetalles1.push(detalleFactura1);
        arrayDetalles1.push(detalleFactura2);
        let arrayDetalles2 = [];
        arrayDetalles2.push(detalleFactura1);
        arrayDetalles2.push(detalleFactura2);
        //>tipoPago (valores validos)= E (Efectivo), TD (Tarjeta Credito),
        // TC (Tarjeta Credito), CC (Cuenta Corriente), TR (Tranferencia)
        //formato fecha  "aaaa-mm-dd"
        let factura1 = new Factura_1.Factura("A", 456, 400, "TC", new Date("2019-05-27"), arrayDetalles1);
        let factura2 = new Factura_1.Factura("C", 322, 20, "E", new Date("2020-08-22"), arrayDetalles2);
        let factura3 = new Factura_1.Factura("B", 156, 200, "TR", new Date("2021-06-13"), arrayDetalles1);
        cliente1.facturas.push(factura1);
        cliente1.facturas.push(factura2);
        cliente1.facturas.push(factura3);
        //     console.log(`El subtotal del dellate 1 es: ${cliente1.facturas[1].detallesFactura[1].calcularSubTotal()}`);
        //    console.log(`El total de items es: ${cliente1.facturas[0].calcularTotalItems()}`);
        //    console.log(`El total final es: ${cliente1.facturas[0].calcularTotalFinal()}`);
        console.log(`El total facturado por tipo de pago es: ${cliente1.totalFacturadoXTipoPago("TR")}`);
    }
}
exports.TestB = TestB;
