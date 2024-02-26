import PaqueteFormMobile from "@/app/components/Forms/PaqueteFormMobile";
import { ICalidad, ITipo } from "@/types/tipos";
import { getCalidades } from "@/utils/getCalidades";
import { getTipos } from "@/utils/getTipos";
import React from "react";

const CargaPaqueteLogueado = async () => {
  const calidades: ICalidad[] = await getCalidades();
  const tipos: ITipo[] = await getTipos();

  return (
    <div className="w-full h-full">
      <PaqueteFormMobile calidades={calidades} tipos={tipos} />
    </div>
  );
};

export default CargaPaqueteLogueado;
