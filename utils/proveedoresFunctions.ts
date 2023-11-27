import { IProveedor } from "@/types/tipos";

export const getAllProveedores = async () => {
  const url = `${process.env.siteUrl}/api/proveedores`;
  const res = await fetch(url, 
    {
      cache: "no-store",
    });
  return res.json();
};

export const addProveedor = async ( proveedor: IProveedor): Promise<IProveedor> => {
  const newProveedor = await fetch(`${process.env.siteUrl}/api/proveedores/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proveedor),
    }
  );
  return newProveedor.json();
};

export const editProveedor = async ( proveedor: IProveedor): Promise<IProveedor> => {
  const updatedProveedor = await fetch(`${process.env.siteUrl}/api/proveedores/${proveedor.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proveedor),
    }
  );
  return updatedProveedor.json();
};

export const deleteProveedor = async ( proveedor: IProveedor): Promise<IProveedor> => {
  const deletedProveedor = await fetch(`${process.env.siteUrl}/api/proveedores/${proveedor.id}`, {
    method: "DELETE",
  });
  return  deletedProveedor.json()
};
