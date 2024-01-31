import UsersList from "@/app/components/DataTable/UsersList";
import { getUsers } from "@/utils/getUsers";
import { AddUser } from "@/app/components/Buttons/AddUser";

export default async function UsersPage() {
  const usuarios = await getUsers();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg" >
      <h1 className="p-3">Proveedores</h1>
      <div className="p-2">
        <AddUser />
      </div>
      <div>
        <UsersList users={usuarios} />
      </div>
    </div>
  );
}