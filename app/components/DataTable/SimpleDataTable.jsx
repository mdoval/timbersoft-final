import { DeleteButton } from '@/app/components/Buttons/DeleteButton'

export function SimpleDataTable({ columnas, datos }) {
  return (
    <table className="table-auto w-full">
      <HeadersDataTable columnas={columnas} />
      <tbody>
        {datos.map((dato) => {
          return <ItemDataTable key={dato.id} item={dato} columnas={columnas} />;
        })}
      </tbody>
    </table>
  );
}

export function ItemDataTable({ item, columnas }) {
  return (
    <tr key={item.id}>
        {columnas.map((col) => {
            return <td className="border px-4 py-2">{item[col.campo]}</td>
        })}
        <td className="border px-4 py-2">
          <DeleteButton />
        </td>
    </tr>
  ) 
}

export function HeadersDataTable({ columnas }) {
  return (
    <thead>
      <tr>
        {columnas.map((col) => {
          return <th key={col.id} className="px-4 py-2">{col.encabezado}</th>
        })}
        <th className="px-4 py-2">Acciones</th>
      </tr>
    </thead>
  );
}