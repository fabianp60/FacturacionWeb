/* tslint:disable */
/* eslint-disable */
import { Categoria } from './categoria';
import { ItemVenta } from './item-venta';
export interface Producto {
  cantidadExistencia: number;
  categoria?: Categoria;
  categoriaId: number;
  id?: number;
  itemsVenta?: null | Array<ItemVenta>;
  nombre: string;
  precioUnitario: number;
}
