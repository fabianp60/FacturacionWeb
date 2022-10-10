/* tslint:disable */
/* eslint-disable */
import { Cliente } from './cliente';
import { ItemVenta } from './item-venta';
export interface Factura {
  cliente?: Cliente;
  clienteId: number;
  fechaExpedicion: string;
  itemsVenta?: null | Array<ItemVenta>;
  numeroFactura?: number;
}
