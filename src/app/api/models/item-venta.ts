/* tslint:disable */
/* eslint-disable */
import { Factura } from './factura';
import { Producto } from './producto';
export interface ItemVenta {
  cantidadVendida: number;
  factura?: Factura;
  id?: number;
  numeroFactura: number;
  precioUnitario: number;
  producto?: Producto;
  productoId: number;
}
