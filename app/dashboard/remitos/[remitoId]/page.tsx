import VolverButton from "@/app/components/Buttons/VolverButton";
import { getRemito } from "@/utils/getRemito";
import { rollo } from "@prisma/client";
import React, { FC } from "react";

const RemitoPage = async ({ params }: { params: { remitoId: number } }) => {
  const remito = await getRemito(params.remitoId);
  //console.log(remito);

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg p-5 spa">
      <h1>Remitos</h1>
      <br />
      <div className="h-full w-full">
        <div className="flex flex-col w-full">
          <div className="flex">
            <div className="m-auto">
              <div>
                <b className="mr-2">Proveedor:</b>
                {remito.proveedor.nombre}
              </div>
              <div>
                <b className="mr-2">Transportista:</b>
                {remito.transportista.nombre}
              </div>
              <div>
                <b className="mr-2">Destino:</b>
                {remito.destino.nombre}
              </div>
            </div>
            <div className="m-auto">
              <div>
                <b className="mr-2">Nro:</b>
                {remito.remito}
              </div>
              <div>
                <b className="mr-2">Fecha:</b>
                {remito.fechaIngreso}
              </div>
            </div>
          </div>
          <hr className="mt-5"></hr>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Categoria</th>
                    <th>Calidad</th>
                    <th>Largo</th>
                    <th>Toneladas</th>
                    <th>Unidades</th>
                    <th>Precio</th>
                    <th>Importe</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {remito.rollos.map((rollo: any) => {
                    console.log(rollo)
                    return (
                      <tr key={rollo.id}>
                        <th>{rollo.categoria.nombre}</th>
                        <td>{rollo.calidad.nombre}</td>
                        <td>{rollo.largo.tamanio}</td>
                        <td>{rollo.toneladas.toString()}</td>
                        <td>{rollo.unidades}</td>
                        <td>{rollo.precio.toString()}</td>
                        <td>{rollo.importe.toString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <VolverButton />
    </div>
  );
};

export default RemitoPage;
