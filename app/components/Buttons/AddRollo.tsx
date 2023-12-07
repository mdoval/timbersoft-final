'use client'

import { useState } from "react"
import SelectCategorias from "../Controls/SelectCategorias"
import { IRollo } from '@/types/tipos'
import SelectLargos from "../Controls/SelectLargos"
import InputNumber from "../Controls/InputNumber"

const AddRollo = () => {
    const [form, setForm] = useState<IRollo> ({
        categoriaId: 0,
        calidadId: 0,
        largoId: 0,
        toneladas: 0,
        unidades: 0,
        precio: 0,
        importe: 0,        
    })
    return (
        <div className="w-full bg-green-200 flex">
            <SelectCategorias value={form.categoriaId} onChange={(newValue) => setForm({...form, categoriaId: newValue})} />
            <SelectLargos value={form.largoId} onChange={(newValue) => setForm({...form, largoId: newValue})} />
            <InputNumber value={form.toneladas} title="Toneladas" placeHolder="Ingrese Toneladas" onChange={(newValue) => setForm({...form, toneladas: newValue})} />
            <InputNumber value={form.unidades} title="Unidades" placeHolder="Ingrese Unidades" onChange={(newValue) => setForm({...form, unidades: newValue})} />
            <InputNumber value={form.precio} title="Precio" placeHolder="Ingrese Precio" onChange={(newValue) => setForm({...form, precio: newValue})} />
            <InputNumber value={form.importe} title="Importe" placeHolder="Ingrese Importe" onChange={(newValue) => setForm({...form, importe: newValue})} />
            <button className="btn btn-primary">Agregar</button>
        </div>
    )
}

export default AddRollo