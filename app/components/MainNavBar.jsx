import Link from "next/link";

export function MainNavBar() {
  return (
  <ul className="w-full bg-red-200 flex p-3">
    <li className="m-3"><Link href="/dashboard/rollos">Rollos</Link></li>
    <li className="m-3">Categorias</li>
    <li className="m-3">Destinos</li>
  </ul>
  )
}
