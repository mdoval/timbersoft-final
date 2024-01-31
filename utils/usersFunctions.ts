import { IUser } from "@/types/tipos";

export const addUser = async ( user: IUser): Promise<IUser> => {
  const newUser = await fetch(`${process.env.siteUrl}/api/users/add`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  return newUser.json();
};

export const editUser = async ( user: IUser): Promise<IUser> => {
  const updatedUser = await fetch(`${process.env.siteUrl}/api/users/${user.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  return updatedUser.json();
};

export const deleteUser = async ( user: IUser): Promise<IUser> => {
  const deletedUser = await fetch(`${process.env.siteUrl}/api/users/${user.id}`, {
    method: "DELETE",
  });
  return  deletedUser.json()
};
