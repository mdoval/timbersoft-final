import { IUser } from "@/types/tipos"
/*
import EditProveedor from "../Buttons/EditProveedor";
import DeleteProveedor from "../Buttons/DeleteProveedor";
*/
interface UserProps {
    user: IUser
}

const ItemUser: React.FC<UserProps> = ({user}) => {
  //console.log(user)
  return (
    <tr className="hover" >
      <td>{user.name}</td>
      <td className="flex gap-2"> 
        {/*<EditProveedor proveedor={proveedor} />*/}
        {/*<DeleteProveedor proveedor={proveedor} />*/}
      </td>
    </tr>
  )
}

export default ItemUser;
