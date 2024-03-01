import PaqueteFormMobile from "@/app/components/Forms/PaqueteFormMobile";
import { IAnchoPaquete, ICalidad, IEspesorPaquete, ILargo, ILargoPaquete, ITipo } from "@/types/tipos";
import { getAnchosPaquete } from "@/utils/getAnchosPaquete";
import { getCalidades } from "@/utils/getCalidades";
import { getEspesoresPaquete } from "@/utils/getEspesoresPaquete";
import { getLargosPaquete } from "@/utils/getLargosPaquete";
import { getTipos } from "@/utils/getTipos";
import React from "react";

const CargaPaqueteLogueado = async () => {
  const calidades: ICalidad[] = await getCalidades();
  const tipos: ITipo[] = await getTipos();
  const largos: ILargoPaquete[] = await getLargosPaquete();
  const anchos: IAnchoPaquete[] = await getAnchosPaquete();
  const espesores: IEspesorPaquete[] = await getEspesoresPaquete()


  return (
    <div className="w-full h-full">
      <PaqueteFormMobile calidades={calidades} tipos={tipos} anchos={anchos} largos={largos} espesores={espesores} />
    </div>
  );
};

export default CargaPaqueteLogueado;
