import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export async function MainNavBar() {
  const { user } = await getServerSession(authOptions);

  return (
    <ul className="w-full bg-gray-700 text-white flex p-3">
      <li className="m-3"><Link href="/dashboard/rollos">Rollos</Link></li>
      <li className="m-3">Categorias</li>
      <li className="m-3">Destinos</li>
      <li className="w-full">
        <div className="w-full flex flex-row-reverse">
          <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.image} alt="{user.handle}" />
        </div>
      </li>
    </ul>
  )
}
