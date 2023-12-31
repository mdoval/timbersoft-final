export interface IProveedor {
  id?: number;
  nombre: string;
}

export interface IUser {
  email: string;
  name: string;
  aserraderoId?: number;
}

export interface IAserradero {
  id: number;
  nombre: string;
}

export interface ICategoria {
  id?: number;
  nombre: string;
}

export interface IDestino {
  id?: number;
  nombre: string;
}

export interface ITransportista {
  id?: number;
  nombre: string;
}

export interface ICalidad {
  id?: number;
  nombre: string;
}

export interface ILargo {
  id?: number;
  tamanio: number;
}

export interface IRemito {
  id?: number;
  fechaIngreso: Date;
  remito: number;
  proveedorId: number | undefined;
  transportistaId: number | undefined;
  destinoId: number | undefined;
  tarifa: number;
  flete: number;
  factura: string;
  proveedor?: IProveedor;
  transportista?: ITransportista;
  destino?: IDestino;
}

export interface IRollo {
  id?: number;
  categoriaId: number | undefined;
  calidadId: number | undefined;
  largoId: number | undefined;
  toneladas: number;
  unidades: number;
  precio: number;
  importe: number;
  remitoId?: number;
}

export interface IRolloUI {
  categoria: ICategoria | undefined;
  calidad: ICalidad | undefined;
  largo: ILargo | undefined;
  toneladas: number;
  unidades: number;
  precio: number;
  importe: number;
}

export interface IRolloNew {
  id?: number;
  categoria: ICategoria;
}
