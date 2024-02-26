import { ITipo } from "@/types/tipos";

export const addTipo = async ( tipo: ITipo): Promise<ITipo> => {
  const newTipo = await fetch(`${process.env.siteUrl}/api/tipos/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipo),
    }
  );
  return newTipo.json();
};

export const editTipo = async ( tipo: ITipo): Promise<ITipo> => {
  const updatedTipo = await fetch(`${process.env.siteUrl}/api/tipos/${tipo.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tipo),
    }
  );
  return updatedTipo.json();
};

export const deleteTipo = async ( tipo: ITipo): Promise<ITipo> => {
  const deletedTipo = await fetch(`${process.env.siteUrl}/api/tipos/${tipo.id}`, {
    method: "DELETE",
  });
  return  deletedTipo.json()
};