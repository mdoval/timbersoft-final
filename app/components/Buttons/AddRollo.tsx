import { ICategoria, ICalidad, ILargo, IRollo, IRolloUI } from "@/types/tipos";
import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import ModalFlex from "../Modal/ModalFlex";

interface AddRolloProps {
  categorias: ICategoria[];
  largos: ILargo[];
  calidades: ICalidad[];
  addRollo: (nuevoRollo: IRolloUI) => void;
}

const AddRollo: FC<AddRolloProps> = ({ categorias, largos, calidades, addRollo }) => {
  const [categoria, setCategoria] = useState<ICategoria>(categorias[0]);
  const [largo, setLargo] = useState<ILargo>(largos[0]);
  const [calidad, setCalidad] = useState<ICalidad>(calidades[0]);
  const [toneladas, setToneladas] = useState<number>(0);
  const [unidades, setUnidades] = useState<number>(0);
  const [precio, setPrecio] = useState<number>(0);
  const [importe, setImporte] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    const rollo: IRolloUI = {
      categoria: categoria,
      largo: largo,
      calidad: calidad,
      toneladas: toneladas,
      unidades: unidades,
      precio: precio,
      importe: importe,
    };
    addRollo(rollo)
    initValue()
    setModalOpen(false)
  };

  const initValue = () => {
    setCategoria(categorias[0])
    setLargo(largos[0])
    setCalidad(calidades[0])
    setToneladas(0)
    setUnidades(0)
    setPrecio(0)
    setImporte(0)
  }

  const handleCategoriaChange = (e: ChangeEvent<HTMLSelectElement>) => {    
    const categoriaEncontrada = categorias.find(categoria => categoria.id === Number(e.target.value)) as ICategoria
    setCategoria(categoriaEncontrada)
  }

  const handleLargosChange = (e: ChangeEvent<HTMLSelectElement>) => {    
    const largoEncontrado = largos.find(largo => largo.id === Number(e.target.value)) as ILargo
    setLargo(largoEncontrado)
  }

  const handleCalidadChange = (e: ChangeEvent<HTMLSelectElement>) => {    
    const calidadEncontrada = calidades.find(calidad => calidad.id === Number(e.target.value)) as ICalidad
    setCalidad(calidadEncontrada)
  }

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
                onChange={handleCategoriaChange}
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
                onChange={handleLargosChange}
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
                onChange={handleCalidadChange}
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

export default AddRollo;
