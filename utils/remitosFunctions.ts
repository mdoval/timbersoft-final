import { IRemito } from "@/types/tipos";

export const addRemito = async ( remito: IRemito): Promise<IRemito> => {
  const newRemito = await fetch(`${process.env.siteUrl}/api/remitos/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(remito),
    }
  );
  return newRemito.json();
};
/*
export const editTransportista = async ( transportista: ITransportista): Promise<ITransportista> => {
  const updatedTransportista = await fetch(`${process.env.siteUrl}/api/transportistas/${transportista.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transportista),
    }
  );
  return updatedTransportista.json();
};

export const deleteTransportista = async ( transportista: ITransportista): Promise<ITransportista> => {
  const deletedTransportista = await fetch(`${process.env.siteUrl}/api/transportistas/${transportista.id}`, {
    method: "DELETE",
  });
  return  deletedTransportista.json()
};*/