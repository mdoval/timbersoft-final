"use client";

import {
  ICategoria,
  IDestino,
  ILargo,
  IProveedor,
  IRemito,
  IRolloUI,
  ITransportista,
} from "@/types/tipos";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, useState } from "react";
import AddRollo from "../Buttons/AddRollo";
import RollosList from "../DataTable/RollosList";
import addRemitoRollos from "@/utils/api";

interface RemitoFormProps {
  proveedores: IProveedor[];
  destinos: IDestino[];
  transportistas: ITransportista[];
  categorias: ICategoria[];
  largos: ILargo[];
}

const today = () => {
  const currentDate: Date = new Date();
  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth() + 1; // Los meses comienzan desde 0
  const day: number = currentDate.getDate();
  const formattedDate: string = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  return formattedDate;
};

const toDate = (dateString: string) => {
  const parts: string[] = dateString.split("-");
  const year: number = parseInt(parts[0], 10);
  const month: number = parseInt(parts[1], 10) - 1; // Restamos 1 porque los meses comienzan desde 0
  const day: number = parseInt(parts[2], 10);
  const dateObject: Date = new Date(year, month, day);
  return dateObject;
};

const RemitoForm: FC<RemitoFormProps> = ({
  proveedores,
  destinos,
  transportistas,
  categorias,
  largos,
}) => {
  const router = useRouter();
  const [fechaRemito, setFechaRemito] = useState<string>(today());
  const [numeroRemito, setNumeroRemito] = useState<number>(0);
  const [proveedor, setProveedor] = useState<IProveedor>(proveedores[0]);
  const [destino, setDestino] = useState<IDestino>(destinos[0]);
  const [transportista, setTransportista] = useState<ITransportista>(transportistas[0]);
  const [tarifa, setTarifa] = useState<number>(0);
  const [flete, setFlete] = useState<number>(0);
  const [factura, setFactura] = useState<string>("");
  const [rollos, setRollos] = useState<IRolloUI[]>([]);

  const handleClick = async () => {
    const remito: IRemito = {
      fechaIngreso: toDate(fechaRemito),
      remito: numeroRemito,
      proveedorId: proveedor.id,
      destinoId: destino.id,
      transportistaId: transportista.id,
      tarifa: tarifa,
      flete: flete,
      factura: factura,
    };
    
    const remitoGuardado = await addRemitoRollos(remito, rollos);
    //console.log(remitoGuardado);
    router.push("/dashboard/ingresomp/");
    router.refresh();
  };

  const agregarRollos = (nuevoRollo: IRolloUI) => {
    rollos.push(nuevoRollo);
    setRollos(rollos);
    router.refresh();
    console.log(rollos);
  };

  const handleProveedorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const proveedorEncontrado = proveedores.find(proveedor => proveedor.id === Number(e.target.value)) as IProveedor
    setProveedor(proveedorEncontrado)
  }

  const handleDestinoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const destinoEncontrado = destinos.find(destino => destino.id === Number(e.target.value)) as IDestino
    setDestino(destinoEncontrado)
  }

  const handleTransportistaChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const transportistaEncontrado = transportistas.find(transportista => transportista.id === Number(e.target.value)) as ITransportista
    setTransportista(transportistaEncontrado)
  }

  return (
    <div>
      <div className="w-full flex">
        <div className="w-1/3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Fecha del remito</span>
            </div>
            <input
              type="date"
              value={fechaRemito}
              onChange={(e) => setFechaRemito(e.target.value)}
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="w-1/3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Numero de remito</span>
            </div>
            <input
              type="number"
              value={Number(numeroRemito)}
              onChange={(e) => setNumeroRemito(Number(e.target.value))}
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
      </div>

      <div className="w-full flex">
        <div className="w-1/3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Proveedores</span>
            </div>
            <select
              className="select select-bordered"
              defaultValue={proveedor.id}
              onChange={handleProveedorChange}
            >
              {proveedores.map((proveedor) => {
                return (
                  <option key={proveedor.id} value={proveedor.id}>
                    {proveedor.nombre}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="w-1/3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Destinos</span>
            </div>
            <select
              className="select select-bordered"
              defaultValue={destino.id}
              onChange={handleDestinoChange}
            >
              {destinos.map((destino) => {
                return (
                  <option key={destino.id} value={destino.id}>
                    {destino.nombre}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <div className="w-1/3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Transportistas</span>
            </div>
            <select
              className="select select-bordered"
              defaultValue={transportista?.id}
              onChange={handleTransportistaChange}
            >
              {transportistas.map((transportista) => {
                return (
                  <option key={transportista.id} value={transportista.id}>
                    {transportista.nombre}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
      </div>

      <div className="w-full flex">
        <div className="w-1/3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Tarifa</span>
            </div>
            <input
              type="number"
              value={Number(tarifa)}
              onChange={(e) => setTarifa(Number(e.target.value))}
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="w-1/3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Flete</span>
            </div>
            <input
              type="number"
              value={Number(flete)}
              onChange={(e) => setFlete(Number(e.target.value))}
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="w-1/3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Factura</span>
            </div>
            <input
              type="text"
              value={Number(factura)}
              onChange={(e) => setFactura(e.target.value)}
              placeholder="Escriba aqui"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
      </div>
      <br />
      <div>
        <AddRollo
          categorias={categorias}
          largos={largos}
          addRollo={agregarRollos}
        />
      </div>

      <div>
        <RollosList rollos={rollos} />
      </div>

      <div className="w-full flex flex-row-reverse">
        <button className="btn btn-primary mr-10" onClick={handleClick}>
          Guardar
        </button>
      </div>
    </div>
  );
};

export default RemitoForm;
