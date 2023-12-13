import { IRollo, IRolloUI } from "@/types/tipos";
import { FC } from "react";

interface RollosListProps {
  rollos: IRolloUI[];
}

const RollosList: FC<RollosListProps> = ({ rollos }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Cat</th>
            <th>Largo</th>
            <th>Calidad</th>
            <th>Ton</th>
            <th>Unidades</th>
            <th>Precio</th>
            <th>Importe</th>
          </tr>
        </thead>
        <tbody>
          {rollos.map((rollo: IRolloUI, index:number) => {
            return (
              <tr key={index} className="hover">
                <th>{rollo.categoria?.nombre}</th>
                <td>{rollo.largo?.tamanio}</td>
                <td>{rollo.calidad?.nombre}</td>
                <td>{rollo.toneladas}</td>
                <td>{rollo.unidades}</td>
                <td>{rollo.precio}</td>
                <td>{rollo.importe}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RollosList;
