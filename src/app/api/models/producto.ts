/* tslint:disable */
/* eslint-disable */
import { Categoria } from './categoria';
export interface Producto {
  cantidadExistencia: number;
  categoria?: Categoria;
  categoriaId: number;
  id?: number;
  nombre: string;
  precioUnitario: number;
}
