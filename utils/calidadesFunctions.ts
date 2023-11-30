import { ICalidad } from "@/types/tipos";

export const addCalidad = async ( calidad: ICalidad): Promise<ICalidad> => {
  const newCalidad = await fetch(`${process.env.siteUrl}/api/calidades/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(calidad),
    }
  );
  return newCalidad.json();
};

export const editCalidad = async ( calidad: ICalidad): Promise<ICalidad> => {
  const updatedCalidad = await fetch(`${process.env.siteUrl}/api/calidades/${calidad.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(calidad),
    }
  );
  return updatedCalidad.json();
};

export const deleteCalidad = async ( calidad: ICalidad): Promise<ICalidad> => {
  const deletedCalidad = await fetch(`${process.env.siteUrl}/api/calidades/${calidad.id}`, {
    method: "DELETE",
  });
  return  deletedCalidad.json()
};