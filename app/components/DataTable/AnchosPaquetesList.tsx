import { IAnchoPaquete } from "@/types/tipos";
import ItemAnchoPaquete from "@/app/components/DataTable/ItemAnchoPaquete";

interface AnchosListProps {
  anchos: IAnchoPaquete[];
}

const AnchosPaqueteList: React.FC<AnchosListProps> = ({ anchos }) => {
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
          { anchos.map((ancho) => <ItemAnchoPaquete key={ancho.id} ancho={ancho} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default AnchosPaqueteList;