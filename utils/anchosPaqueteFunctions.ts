import { IAnchoPaquete } from "@/types/tipos";

export const addAnchoPaquete = async ( ancho: IAnchoPaquete): Promise<IAnchoPaquete> => {
  const newAncho = await fetch(`${process.env.siteUrl}/api/anchospaquete/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ancho),
    }
  );
  return newAncho.json();
};

export const editAnchoPaquete = async ( ancho: IAnchoPaquete): Promise<IAnchoPaquete> => {
  const updatedAncho = await fetch(`${process.env.siteUrl}/api/anchospaquete/${ancho.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ancho),
    }
  );
  return updatedAncho.json();
};

export const deleteAnchoPaquete = async ( ancho: IAnchoPaquete): Promise<IAnchoPaquete> => {
  const deletedAncho = await fetch(`${process.env.siteUrl}/api/anchospaquete/${ancho.id}`, {
    method: "DELETE",
  });
  return  deletedAncho.json()
};