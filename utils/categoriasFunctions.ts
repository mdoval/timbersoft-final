import { ICategoria } from "@/types/tipos";

export const getAllCategoriaICategoriaes = async () => {
  const url = `${process.env.siteUrl}/api/CategoriaICategoriaes`;
  const res = await fetch(url, 
    {
      cache: "no-store",
    });
  return res.json();
};

export const addCategoriaICategoria = async ( CategoriaICategoria: ICategoria): Promise<ICategoria> => {
  const newCategoriaICategoria = await fetch(`${process.env.siteUrl}/api/CategoriaICategorias/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CategoriaICategoria),
    }
  );
  return newCategoriaICategoria.json();
};

export const editCategoriaICategoria = async ( CategoriaICategoria: ICategoria): Promise<ICategoria> => {
  const updatedCategoriaICategoria = await fetch(`${process.env.siteUrl}/api/CategoriaICategoriaes/${CategoriaICategoria.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CategoriaICategoria),
    }
  );
  return updatedCategoriaICategoria.json();
};

export const deleteCategoriaICategoria = async ( CategoriaICategoria: ICategoria): Promise<ICategoria> => {
  const deletedCategoriaICategoria = await fetch(`${process.env.siteUrl}/api/CategoriaICategoriaes/${CategoriaICategoria.id}`, {
    method: "DELETE",
  });
  return  deletedCategoriaICategoria.json()
};
