import Image from "next/image";
import CodigoDeBarras from "./CodigoDeBarras";
import { FC } from "react";

interface EtiquetasProps {
  producto: string;
  descripcion: string;
  calidad: string;
  codigodebarras: string;
  escuadria: string;
  piezas: string;
}

const EtiquetaImprimibleA4: FC<EtiquetasProps> = ({
  producto,
  descripcion,
  calidad,
  codigodebarras,
  escuadria,
  piezas,
}) => {
  return (
    <div className="h-1/3border border-black m-1">
      <div className="w-full h-1/2 flex">
        <div className="border border-black p-2 w-60">
          <Image
            src="/images/kerflogo.jpg"
            height={100}
            width={100}
            alt="logo"
          />
        </div>
        <div className="border border-black flex flex-col w-32">
          <div className="h-1/2 p-2 flex justify-center items-center">
            PRODUCTO
          </div>
          <div className="h-1/2 p-2 flex justify-center items-center">
            {producto}
          </div>
        </div>
        <div className="border border-black border-black-solid flex flex-col w-60">
          <div className="h-1/2 p-2 flex justify-center items-center">
            DESCRIPCION
          </div>
          <div className="h-1/2 p-2 flex justify-center items-center">
            {descripcion}
          </div>
        </div>
        <div className="border border-black border-black-solid flex flex-col w-36">
          <div className="h-1/2 p-2 flex justify-center items-center">
            CALIDAD
          </div>
          <div className="h-1/2 p-2 flex justify-center items-center">{calidad}</div>
        </div>
        <div className="border border-black border-black-solid flex flex-col w-60">
          <div className="h-1/2 p-2 flex justify-center items-center">
            Identificacion de Paquete
          </div>
          <div className="h-1/2 p-2 flex justify-center items-center">
            <CodigoDeBarras dato="2024043000001" />
          </div>
        </div>
      </div>

      <div className="w-full h-1/2 flex">
        <div className="border border-black p-2 w-60">
          <div className="h-1/2 flex text-center justify-center items-center">
            ESCUADRIA
          </div>
          <div className="h-1/2 flex text-center justify-center items-center">
            {escuadria}
          </div>
        </div>
        <div className="border border-black flex flex-col w-32">
          <div className="h-1/2 p-2 flex justify-center items-center">
            CANTIDAD DE PIEZAS
          </div>
          <div className="h-1/2 p-2 flex justify-center items-center">{piezas}</div>
        </div>
        <div className="border border-black border-black-solid flex flex-col w-60">
          <div className="flex h-full">
            <div className="h-full flex text-center justify-center items-center border border-black">
              VOLUMEN POR PIEZA
            </div>
            <div>
              <div className="h-1/2 flex text-center justify-center items-center border border-black">
                0.77 p2
              </div>
              <div className="h-1/2 flex text-center justify-center items-center border border-black">
                0.0008 m3
              </div>
            </div>
          </div>
        </div>
        <div className="border border-black border-black-solid flex flex-col w-96">
          <div className="flex h-full">
            <div className="h-full flex text-center justify-center items-center border border-black">
              VOLUMEN POR PAQUETE
            </div>
            <div>
              <div className="h-1/2 flex text-center justify-center items-center border border-black">
                0.77 p2
              </div>
              <div className="h-1/2 flex text-center justify-center items-center border border-black">
                0.0008 m3
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtiquetaImprimibleA4;
