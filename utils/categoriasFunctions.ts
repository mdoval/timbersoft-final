import { ICategoria } from "@/types/tipos";

export const addCategoria = async ( categoria: ICategoria): Promise<ICategoria> => {
  const newCategoria = await fetch(`${process.env.siteUrl}/api/categorias/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoria),
    }
  );
  return newCategoria.json();
};

export const editCategoria = async ( categoria: ICategoria): Promise<ICategoria> => {
  const updatedCategoria = await fetch(`${process.env.siteUrl}/api/categorias/${categoria.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoria),
    }
  );
  return updatedCategoria.json();
};

export const deleteCategoria = async ( categoria: ICategoria): Promise<ICategoria> => {
  const deletedCategoria = await fetch(`${process.env.siteUrl}/api/categorias/${categoria.id}`, {
    method: "DELETE",
  });
  return  deletedCategoria.json()
};