import { IEspesorPaquete } from "@/types/tipos";
import ItemEspesorPaquete from "@/app/components/DataTable/ItemEspesorPaquete";

interface EspesoresListProps {
  espesores: IEspesorPaquete[];
}

const EspesoresPaquetesList: React.FC<EspesoresListProps> = ({ espesores }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tamaño</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { espesores.map((espesor: any) => <ItemEspesorPaquete key={espesor.id} espesor={espesor} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default EspesoresPaquetesList;