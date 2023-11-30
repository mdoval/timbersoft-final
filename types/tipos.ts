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