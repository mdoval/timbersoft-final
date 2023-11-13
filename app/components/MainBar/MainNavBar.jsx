import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { AccountMenu } from '@/app/components/MainBar/AccountMenu'

export async function MainNavBar() {
  const { user } = await getServerSession(authOptions);

  return (
    <ul className="bg-gray-500">
      <li className="border border-gray-300"><AccountMenu user={user} /></li>
      <li className="border border-white">
        <div className="menu_header">
          <Link href="/dashboard/rollos">Rollos</Link>
        </div>
      </li>
      <li className="border border-gray-300">
        <div className="menu_header">
          Categorias
        </div>
      </li>
      <li className="border border-gray-300">
        <div className="menu_header">
          Destinos
        </div>
      </li>
    </ul>
  )
}
