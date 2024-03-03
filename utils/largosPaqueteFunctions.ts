import { ILargoPaquete } from "@/types/tipos";

export const addLargoPaquete = async ( largo: ILargoPaquete): Promise<ILargoPaquete> => {
  const newLargo = await fetch(`${process.env.siteUrl}/api/largospaquete/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(largo),
    }
  );
  return newLargo.json();
};

export const editLargoPaquete = async ( largo: ILargoPaquete): Promise<ILargoPaquete> => {
  const updatedLargo = await fetch(`${process.env.siteUrl}/api/largospaquete/${largo.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(largo),
    }
  );
  return updatedLargo.json();
};

export const deleteLargoPaquete = async ( largo: ILargoPaquete): Promise<ILargoPaquete> => {
  const deletedLargo = await fetch(`${process.env.siteUrl}/api/largospaquete/${largo.id}`, {
    method: "DELETE",
  });
  return  deletedLargo.json()
};