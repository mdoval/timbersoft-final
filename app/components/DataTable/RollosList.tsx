import { IRollo } from "@/types/tipos";
import { FC } from "react";

interface RollosListProps {
  rollos: IRollo[];
}

const RollosList: FC<RollosListProps> = ({ rollos }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Cat</th>
            <th>Largo</th>
            <th>Ton</th>
            <th>Unidades</th>
            <th>Precio</th>
            <th>Importe</th>
          </tr>
        </thead>
        <tbody>
          {rollos.map((rollo: IRollo, index:number) => {
            return (
              <tr key={index} className="hover">
                <th>{rollo.categoriaId}</th>
                <td>{rollo.largoId}</td>
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
