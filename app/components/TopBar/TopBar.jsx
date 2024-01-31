/*import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { AccountMenu } from '@/app/components/MainBar/AccountMenu'*/
import { TopBarAccount } from "./TopBarAccount";
import { getUsuarioLogueado } from "@/utils/getUsuarioLogueado";

export default async function TopBar() {
  //const { user } = await getServerSession(authOptions);
  const user = await getUsuarioLogueado()

  return (
      <TopBarAccount user={user} />
  );
}
