import { IPaquete } from "@/types/tipos";

export const addPaquete = async ( paquete: IPaquete): Promise<IPaquete> => {
  const newPaquete = await fetch(`${process.env.siteUrl}/api/paquetes/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paquete),
    }
  );
  return newPaquete.json();
}

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