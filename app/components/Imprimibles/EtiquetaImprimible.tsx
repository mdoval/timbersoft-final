import Image from "next/image";
import CodigoDeBarras from "./CodigoDeBarras";
import { FC } from "react";

interface EtiquetasProps {
  producto: string
  descripcion: string
  calidad: string
  codigodebarras: string
  escuadria: string
  piezas: string
}

const EtiquetaImprimible: FC<EtiquetasProps> = ({producto, descripcion, calidad, codigodebarras, escuadria, piezas}) => {
  return (
    <div className="h-96 flex flex-col">
      <div className="flex h-1/2 ">
        <div className="border border-black p-2 flex flex-col w-40">
          <Image
            src="/images/kerflogo.jpg"
            height={150}
            width={150}
            alt="logo"
          />
        </div>
        <div className="border border-solid border-black flex flex-col w-32">
          <div className="h-1/2 border border-black p-2 flex justify-center items-center">PRODUCTO</div>
          <div className="h-1/2 border border-black p-2 flex justify-center items-center">{producto}</div>
        </div>
        <div className="border border-solid border-black flex flex-col w-80">
          <div className="h-1/2 border border-black p-2 flex justify-center items-center">Descripcion</div>
          <div className="h-1/2 border border-black p-2 flex justify-center items-center">{descripcion}</div>
        </div>
        <div className="border border-solid border-black flex flex-col w-36">
          <div className="h-1/2 border border-black p-2 flex justify-center items-center">CALIDAD</div>
          <div className="h-1/2 border border-black p-2 flex justify-center items-center">{calidad}</div>
        </div>
        <div className="border border-solid border-black flex flex-col w-60">
          <div className="h-1/2 border border-black p-2 flex justify-center items-center">Identificacion de Paquete</div>
          <div className="h-1/2 border border-black p-2 flex justify-center items-center"><CodigoDeBarras dato={codigodebarras} /></div>
        </div>
      </div>

      <div className="flex w-full h-1/2">
        <div className="border border-solid border-black flex flex-col w-40">
          <div className="h-1/2 p-2 border border-black flex text-center justify-center items-center">ESCUADRIA</div>
          <div className="h-1/2 p-2 border border-black flex text-center justify-center items-center">{escuadria}</div>
        </div>
        <div className="border border-solid border-black flex flex-col w-32">
          <div className="h-1/2 p-2 border border-black flex text-center justify-center items-center">CANTIDAD DE PIEZAS</div>
          <div className="h-1/2 p-2 border border-black flex text-center justify-center items-center">{piezas}</div>
        </div>
        <div className="border border-solid border-black flex w-80">
          <div className="w-1/2 border border-black p-2 flex text-center justify-center items-center">VOLUMEN POR PIEZA</div>
          <div className="w-1/2 flex flex-col">
            <div className="h-1/2 w-full border border-black p-2 text-center flex justify-center items-center">0.77 p2</div>
            <div className="h-1/2 w-full border border-black p-2 text-center flex justify-center items-center">0.002 m3</div>
          </div>
        </div>
        <div className="border border-solid border-black flex w-96">
          <div className="w-36 border border-black p-2 text-center flex justify-center items-center">VOLUMEN POR PAQUETE</div>
          <div className="w-60 flex flex-col">
            <div className="h-1/2 w-full border border-black p-2 flex text-center justify-center items-center">650.15 p2</div>
            <div className="h-1/2 w-full border border-black p-2 flex text-center justify-center items-center">1.534 m3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtiquetaImprimible;
