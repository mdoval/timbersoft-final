import EtiquetaImprimibleA4 from "@/app/components/Imprimibles/EtiquetaImprimibleA4";
import PrintService from "@/app/components/Imprimibles/PrintService";
import { getPaquetes } from "@/utils/getPaquetes";
import React from "react";

const EtiquetasPage = async () => {
  const paquetes = await getPaquetes();

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <h1>Imprimir Etiquetas</h1>
      <br />
      <div className="h-full w-full">
        <PrintService>
          <div className="paginaA4">
            {paquetes.map((paquete: any) => {
              console.log(paquete);
              return (
                <EtiquetaImprimibleA4
                  producto={paquete.tipo.catalogo}
                  descripcion={paquete.tipo.descripcion}
                  calidad={paquete.calidad.nombre}
                  codigodebarras={"el que lee es maracaibo"}
                  escuadria="17x89x1200"
                  piezas={paquete.cantidad}
                />
              );
            })}
          </div>
        </PrintService>
      </div>
    </div>
  );
};

export default EtiquetasPage;
