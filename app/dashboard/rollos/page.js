import DataTable from "@/app/components/DataTable";

const columns = ['ID','Fecha', 'Nro. de Remito', 'Toneladas','Unidades', 'Flete', 'Largo', 'Proveedor', 'Precio', 'Importe', 'Transportista', 'Factura', 'Categoria', 'Destino' ];

async function getData() {
  const res = await fetch("http://localhost:3000/api/rollos");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const rollos = await getData();

  return (
    <div className="flex flex-col h-full w-full">
      <h1>Tabla de Rollos</h1>
      <hr></hr>
      <DataTable columns={columns} data={rollos} />
    </div>
  );
}
