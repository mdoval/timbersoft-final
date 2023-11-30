import { IDestino } from "@/types/tipos";

export const addDestino = async ( destinos: IDestino): Promise<IDestino> => {
  const newDestino = await fetch(`${process.env.siteUrl}/api/destinos/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destinos),
    }
  );
  return newDestino.json();
};

export const editDestino = async ( destino: IDestino): Promise<IDestino> => {
  const updatedDestino = await fetch(`${process.env.siteUrl}/api/destinos/${destino.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destino),
    }
  );
  return updatedDestino.json();
};

export const deleteDestino = async ( destino: IDestino): Promise<IDestino> => {
  const deletedDestino = await fetch(`${process.env.siteUrl}/api/destinos/${destino.id}`, {
    method: "DELETE",
  });
  return  deletedDestino.json()
};