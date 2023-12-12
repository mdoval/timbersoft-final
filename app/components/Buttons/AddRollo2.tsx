import { ICategoria, ICalidad, ILargo, IRollo } from "@/types/tipos";
import { FC, useState } from "react";
import ModalFlex from "../Modal/ModalFlex";

interface AddRolloProps {
  categorias: ICategoria[];
  largos: ILargo[];
  calidades: ICalidad[];
  addRollo: (nuevoRollo: IRollo) => void;
}

const AddRollo2: FC<AddRolloProps> = ({ categorias, largos, calidades, addRollo }) => {
  const [categoria, setCategoria] = useState<ICategoria>(categorias[0]);
  const [largo, setLargo] = useState<ILargo>(largos[0]);
  const [calidad, setCalidad] = useState<ICalidad>(calidades[0]);
  const [toneladas, setToneladas] = useState<number>(0);
  const [unidades, setUnidades] = useState<number>(0);
  const [precio, setPrecio] = useState<number>(0);
  const [importe, setImporte] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    const rollo: IRollo = {
      categoriaId: categoria.id,
      largoId: largo.id,
      calidadId: calidad.id,
      toneladas: toneladas,
      unidades: unidades,
      precio: precio,
      importe: importe,
    };
    console.log(rollo)
    addRollo(rollo)
    setModalOpen(false)
  };

  return (
    <div>
      <button
        className="btn btn-primary mr-10"
        onClick={() => setModalOpen(true)}
      >
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
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Categoria</span>
              </div>
              <select
                className="select select-bordered"
                defaultValue={categoria.id}
              >
                {categorias.map((categoria) => {
                  return (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nombre}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Largo</span>
              </div>
              <select
                className="select select-bordered"
                defaultValue={largo.id}
              >
                {largos.map((largo) => {
                  return (
                    <option key={largo.id} value={largo.id}>
                      {largo.tamanio}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Calidad</span>
              </div>
              <select
                className="select select-bordered"
                defaultValue={calidad.id}
              >
                {calidades.map((calidad) => {
                  return (
                    <option key={calidad.id} value={calidad.id}>
                      {calidad.nombre}
                    </option>
                  );
                })}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Toneladas</span>
              </div>
              <input
                type="number"
                value={Number(toneladas)}
                onChange={(e) => setToneladas(Number(e.target.value))}
                placeholder="Escriba aqui"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Unidades</span>
              </div>
              <input
                type="number"
                value={Number(unidades)}
                onChange={(e) => setUnidades(Number(e.target.value))}
                placeholder="Escriba aqui"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Numero de remito</span>
              </div>
              <input
                type="number"
                value={Number(precio)}
                onChange={(e) => setPrecio(Number(e.target.value))}
                placeholder="Escriba aqui"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Numero de remito</span>
              </div>
              <input
                type="number"
                value={Number(importe)}
                onChange={(e) => setImporte(Number(e.target.value))}
                placeholder="Escriba aqui"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <button className="btn btn-primary" onClick={handleClick}>Guardar</button>
          </div>
        </div>
      </ModalFlex>
    </div>
  );
};

export default AddRollo2;
