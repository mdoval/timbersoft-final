import { ITransportista } from "@/types/tipos";

export const addTransportista = async ( transportista: ITransportista): Promise<ITransportista> => {
  const newTransportista = await fetch(`${process.env.siteUrl}/api/transportistas/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transportista),
    }
  );
  return newTransportista.json();
};

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
};