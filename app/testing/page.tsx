"use client";

import EtiquetaImprimibleA4 from "../components/Imprimibles/EtiquetaImprimibleA4";
import PrintService from "../components/Imprimibles/PrintService";

export default function TestingPage() {
  return (
    <PrintService>
      <div className="paginaA4 border shadow-lg bg-white mb-4">
        <EtiquetaImprimibleA4
          key={0}
          producto={"TAPISE COM"}
          descripcion={"SECO COMO VOS"}
          calidad={"CU"}
          codigodebarras={"2024300400001"}
          escuadria="17x89x1200"
          piezas={"854"}
        />
        <EtiquetaImprimibleA4
          key={0}
          producto={"TAPISE COM"}
          descripcion={"SECO COMO VOS"}
          calidad={"CU"}
          codigodebarras={"2024300400001"}
          escuadria="17x89x1200"
          piezas={"854"}
        />
        <EtiquetaImprimibleA4
          key={0}
          producto={"TAPISE COM"}
          descripcion={"SECO COMO VOS"}
          calidad={"CU"}
          codigodebarras={"2024300400001"}
          escuadria="17x89x1200"
          piezas={"854"}
        />
      </div>
      <div className="paginaA4 border shadow-lg bg-white">
        <EtiquetaImprimibleA4
          key={0}
          producto={"TAPISE COM"}
          descripcion={"SECO COMO VOS"}
          calidad={"CU"}
          codigodebarras={"2024300400001"}
          escuadria="17x89x1200"
          piezas={"854"}
        />
        <EtiquetaImprimibleA4
          key={0}
          producto={"TAPISE COM"}
          descripcion={"SECO COMO VOS"}
          calidad={"CU"}
          codigodebarras={"2024300400001"}
          escuadria="17x89x1200"
          piezas={"854"}
        />
        <EtiquetaImprimibleA4
          key={0}
          producto={"TAPISE COM"}
          descripcion={"SECO COMO VOS"}
          calidad={"CU"}
          codigodebarras={"2024300400001"}
          escuadria="17x89x1200"
          piezas={"854"}
        />
      </div>
    </PrintService>
  );
}
