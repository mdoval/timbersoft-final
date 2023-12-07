export interface IProveedor {
    id?: number,
    nombre: string
}

export interface IUser {
    email: string,
    name: string,
    aserraderoId?: number
}

export interface IAserradero {
    id: number,
    nombre: string    
}

export interface ICategoria {
    id?: number,
    nombre: string
}

export interface IDestino {
    id?: number,
    nombre: string
}

export interface ITransportista {
    id?: number,
    nombre: string
}

export interface ICalidad {
    id?: number,
    nombre: string
}

export interface ILargo {
    id?: number,
    tamanio: number
}

export interface IRemito {
    id?: number,
    fechaIngreso: string,
    remito: number,
    proveedorId: number,
    transportistaId: number,
    destinoId: number,
    tarifa: number,
    flete: number,
    factura: string,
}

export interface IRollo {
    id?: number,
    categoriaId: number,
    calidadId: number,
    largoId: number,
    toneladas: number,
    unidades: number,
    precio: number,
    importe: number,
  }