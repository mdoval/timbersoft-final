import { IEspesorPaquete } from "@/types/tipos";

export const addEspesorPaquete = async ( espesor: IEspesorPaquete): Promise<IEspesorPaquete> => {
  const newLargo = await fetch(`${process.env.siteUrl}/api/espesorespaquete/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(espesor),
    }
  );
  return newLargo.json();
};

export const editEspesorPaquete = async ( espesor: IEspesorPaquete): Promise<IEspesorPaquete> => {
  const updatedLargo = await fetch(`${process.env.siteUrl}/api/espesorespaquete/${espesor.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(espesor),
    }
  );
  return updatedLargo.json();
};

export const deleteEspesorPaquete = async ( espesor: IEspesorPaquete): Promise<IEspesorPaquete> => {
  const deletedLargo = await fetch(`${process.env.siteUrl}/api/espesorespaquete/${espesor.id}`, {
    method: "DELETE",
  });
  return  deletedLargo.json()
};