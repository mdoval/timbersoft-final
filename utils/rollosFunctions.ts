import { IRollo } from "@/types/tipos";

export const addRollo = async (rollo: IRollo): Promise<IRollo> => {
  const newRollo = await fetch(`${process.env.siteUrl}/api/rollos/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rollo),
    }
  );
  return newRollo.json();
};

export const editRollo = async ( rollo: IRollo): Promise<IRollo> => {
  const updatedRollo = await fetch(`${process.env.siteUrl}/api/rolloes/${rollo.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rollo),
    }
  );
  return updatedRollo.json();
};

export const deleterollo = async ( rollo: IRollo): Promise<IRollo> => {
  const deletedRollo = await fetch(`${process.env.siteUrl}/api/rollos/${rollo.id}`, {
    method: "DELETE",
  });
  return  deletedRollo.json()
};