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
    <div className="bg-gray-200 border border-gray-400 h-32 p-4 mb-4">
      Div 1
    </div>
  );
};

export default EtiquetaImprimibleA4;
