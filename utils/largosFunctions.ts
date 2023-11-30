import { ILargo } from "@/types/tipos";

export const addLargo = async ( largo: ILargo): Promise<ILargo> => {
  const newLargo = await fetch(`${process.env.siteUrl}/api/largos/add`,
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

export const editLargo = async ( largo: ILargo): Promise<ILargo> => {
  const updatedLargo = await fetch(`${process.env.siteUrl}/api/largos/${largo.id}`,
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

export const deleteLargo = async ( largo: ILargo): Promise<ILargo> => {
  const deletedLargo = await fetch(`${process.env.siteUrl}/api/largos/${largo.id}`, {
    method: "DELETE",
  });
  return  deletedLargo.json()
};