import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { BotonLogout } from '@/app/components/BotonLogout'

export default async function Dashboard() {
  //const { user } = await getServerSession(authOptions);
  //console.log(user);
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-10">Dashboard</h1>
      <hr />
    </div>
  );
}
