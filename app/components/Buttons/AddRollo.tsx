"use client";

import { FC, useState } from "react";
import SelectCategorias from "../Controls/SelectCategorias";
import { IRollo } from "@/types/tipos";
import SelectLargos from "../Controls/SelectLargos";
import InputNumber from "../Controls/InputNumber";
import ModalFlex from "../Modal/ModalFlex";

interface AddRolloProps {
  addRollo: (nuevoRollo: IRollo) => void
}

const AddRollo: FC<AddRolloProps> = ({addRollo}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [form, setForm] = useState<IRollo>({
    categoriaId: 0,
    calidadId: 0,
    largoId: 0,
    toneladas: 0,
    unidades: 0,
    precio: 0,
    importe: 0,
  });

  const handleAddRollo = () => {
    addRollo(form)
    setModalOpen(false)
  }

  return (
    <div>
      <button className="btn btn-primary mr-10" onClick={() => setModalOpen(true)}>
        Agregar Rollo
      </button>
      <ModalFlex
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        w="1/4"
        h="1/4"
      >
        <h3 className="font-bold text-lg">Nuevo Rollo</h3>
        <div className="modal-action">
          <br />
          <div className="w-full h-full flex flex-col space-y-1">
            <SelectCategorias
              value={form.categoriaId}
              onChange={(newValue) =>
                setForm({ ...form, categoriaId: Number(newValue) })
              }
            />
            <SelectLargos
              value={form.largoId}
              onChange={(newValue) => setForm({ ...form, largoId: newValue })}
            />
            <InputNumber
              value={form.toneladas}
              title="Toneladas"
              placeHolder="Ingrese Toneladas"
              onChange={(newValue) => setForm({ ...form, toneladas: newValue })}
            />
            <InputNumber
              value={form.unidades}
              title="Unidades"
              placeHolder="Ingrese Unidades"
              onChange={(newValue) => setForm({ ...form, unidades: newValue })}
            />
            <InputNumber
              value={form.precio}
              title="Precio"
              placeHolder="Ingrese Precio"
              onChange={(newValue) => setForm({ ...form, precio: newValue })}
            />
            <InputNumber
              value={form.importe}
              title="Importe"
              placeHolder="Ingrese Importe"
              onChange={(newValue) => setForm({ ...form, importe: newValue })}
            />
            <button className="btn btn-primary" onClick={handleAddRollo}>
              Guardar
            </button>
          </div>
        </div>
      </ModalFlex>
    </div>
  );
};

export default AddRollo;
