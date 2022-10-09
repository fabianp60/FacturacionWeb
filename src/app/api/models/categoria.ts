/* tslint:disable */
/* eslint-disable */
import { Producto } from './producto';
export interface Categoria {
  id?: number;
  nombreCategoria: string;
  productos?: null | Array<Producto>;
}
