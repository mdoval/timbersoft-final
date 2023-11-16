export function SimpleDataTable({ columnas, datos }) {
    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2">Id</th>
                    <th className="px-4 py-2">Proveedor</th>
                    <th className="px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Juan Perez</td>
                    <td className="border px-4 py-2">Eliminar - Editar</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">Pedro Gomez</td>
                    <td className="border px-4 py-2">Eliminar - Editar</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">Jorge Lopez</td>
                    <td className="border px-4 py-2">Eliminar - Editar</td>
                </tr>
            </tbody>
        </table>
    )
}