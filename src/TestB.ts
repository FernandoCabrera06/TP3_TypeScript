import { Articulo } from "./modelo/modelo_B/Articulo";
import { DetalleFactura } from "./modelo/modelo_B/DetalleFactura";
import { Factura } from "./modelo/modelo_B/Factura";
import { Cliente } from "./modelo/modelo_B/Cliente";
export class TestB {
    public static main() {
    
       
        

        let cliente1 = new Cliente(32,"Fernando Cabrera",20398412);


        let articulo1 = new Articulo(98,"Harina",150,"kg");
        let articulo2 = new Articulo(23,"Queso",250,"kg");
        let articulo3 = new Articulo(96,"Salsa",80,"kg");
        let articulo4 = new Articulo(54,"Condimento",100,"kg");
        let articulo5 = new Articulo(38,"Jamón",200,"kg");

        let detalleFactura1 = new DetalleFactura(3,articulo1); //3*150=450

        let detalleFactura2 = new DetalleFactura(2,articulo3); //2*80=240

let arrayDetalles1:Array<DetalleFactura> =[];
arrayDetalles1.push(detalleFactura1);
arrayDetalles1.push(detalleFactura2);

let arrayDetalles2:Array<DetalleFactura> =[];
arrayDetalles2.push(detalleFactura1);
arrayDetalles2.push(detalleFactura2);
                //>tipoPago (valores validos)= E (Efectivo), TD (Tarjeta Credito),
        // TC (Tarjeta Credito), CC (Cuenta Corriente), TR (Tranferencia)

        //formato fecha  "aaaa-mm-dd"
        let factura1 =new Factura("A",456,400,"TC",new Date("2019-05-27"),arrayDetalles1);
        let factura2 =new Factura("C",322,20,"E",new Date("2020-08-22"),arrayDetalles2);
        let factura3 =new Factura("B",156,200,"TR",new Date("2021-06-13"),arrayDetalles1);

        cliente1.facturas.push(factura1);
        cliente1.facturas.push(factura2);
        cliente1.facturas.push(factura3);


    //     console.log(`El subtotal del dellate 1 es: ${cliente1.facturas[1].detallesFactura[1].calcularSubTotal()}`);
    //    console.log(`El total de items es: ${cliente1.facturas[0].calcularTotalItems()}`);
    //    console.log(`El total final es: ${cliente1.facturas[0].calcularTotalFinal()}`);
        console.log(`El total facturado por tipo de pago es: ${cliente1.totalFacturadoXTipoPago("TR")}`);
    }
}