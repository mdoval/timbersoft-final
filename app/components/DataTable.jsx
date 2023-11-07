export default function DataTable({ columns, data }) {
  //console.log(columns);
  //console.log(data);

  const opciones = { 
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };
  
  //const fechaFormateada = fechaOriginal.toLocaleDateString('es-AR', opciones);
  
  return (
    <div className="w-full h-full">
      <table className="table-auto w-full h-f">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((titulo) => {
              return <th className="p-3 text-left" key={{ titulo }}>{titulo}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((dato) => {
            return (
              <tr key={dato.id} className="text-left border-2 p-5" >
                <td>{dato.id}</td>
                <td>{dato.fechaIngreso}</td>
                <td>{dato.remito}</td>
                <td>{dato.toneladas}</td>
                <td>{dato.unidades}</td>
                <td>{dato.flete}</td>
                <td>{dato.largo.tamanio}</td>
                <td>{dato.proveedor.nombre}</td>
                <td>{dato.precio}</td>
                <td>{dato.importe}</td>
                <td>{dato.transportista.nombre}</td>
                <td>{dato.factura}</td>
                <td>{dato.categoria.nombre}</td>
                <td>{dato.destino.nombre}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
const columns = ['Fecha', 'Nro. de Remito', 'Toneladas','Unidades', 'Flete', 'Largo', 'Proveedor', 'Precio', 'Importe', 'Transportista', 'Factura', 'Categoria', 'Destino' ];

