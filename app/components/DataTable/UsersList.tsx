import { IUser } from "@/types/tipos";
import ItemUser from "@/app/components/DataTable/ItemUser";

interface UsersListProps {
  users: IUser[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Nombre del Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { users.map((user) => <ItemUser key={user.id} user={user} /> )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
