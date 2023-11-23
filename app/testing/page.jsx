import { SimpleDataTable } from "@/app/components/DataTable/SimpleDataTable"
import { CreateProveedorForm } from '@/app/components/Forms/CreateProveedorForm'

const columnas = [  
  {
    id: 0,
    encabezado: "Id",
    campo: "id"
  },
  {
    id: 1,
    encabezado: "Nombre de Proveedor",
    campo: "nombre"
  }
]

const getData = async () => {
  const url = `${process.env.siteUrl}/api/proveedores`
  const res = await fetch(url)
  return res.json()
}

export default async function TestingPage() {
  const datos = await getData()

  return (
    <div className="bg-white h-5/6 p-4">
      <h1>Testing</h1>
      <div>
        <CreateProveedorForm />
      </div>
      <div className="mt-4">
        <SimpleDataTable columnas={columnas} datos={datos} />
      </div>
    </div>
  )
}