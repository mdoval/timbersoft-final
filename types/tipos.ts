export interface IProveedor {
  id?: number;
  nombre: string;
}

/*
export interface IUser {
  email: string;
  name: string;
  aserraderoId?: number;
}
*/
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

export interface IEstado {
  id?: number;
  descripcion: string;
}


export interface ILargo {
  id?: number;
  tamanio: number;
}

export interface ILargoPaquete {
  id?: number;
  tamanio: number;
}

export interface IAnchoPaquete {
  id?: number;
  tamanio: number;
}

export interface IEspesorPaquete {
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
  largoId: number | undefined;
  toneladas: number;
  unidades: number;
  precio: number;
  importe: number;
  remitoId?: number;
}

export interface IRolloUI {
  categoria: ICategoria | undefined;
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

export interface IUser {
  id?: number
  createdAt?: Date
  updatedAt?: Date
  email?: string
  name?: string
  password?: string
  aserradero?: string
}

export interface IError {
  message: string
}

export interface IPaquete {
  id?: number
  espesorId?: number | undefined;
  anchoId?: number | undefined;
  largoId?: number | undefined;
  cantidad: number
  estadoId?: number | undefined;
  calidadId?: number | undefined;
  tipoId?: number | undefined;
  createdAt?: Date
  updatedAt?: Date
  calidad?:  ICalidad
  estado?: IEstado
  tipo?: ITipo
  ancho?: IAnchoPaquete
  largo?: ILargoPaquete
  espesor?: IEspesorPaquete
}


export interface ITipo {
  id?: number;
  catalogo: string;
  descripcion: string;
}