import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { BotonLogout } from '@/app/components/BotonLogout'

export default async function Dashboard() {
  const { user } = await getServerSession(authOptions);
  console.log(user);
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-10">Dashboard</h1>
      <hr />
      <div className="bg-gray-200 flex flex-col items-center p-10 border-2 shadow-lg">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src={user.image}
          alt="{user.handle}"
        />
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
      </div>

      <BotonLogout />
    </div>
  );
}
