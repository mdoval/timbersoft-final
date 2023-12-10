import Link from "next/link";

export default async function IngresoMateriaPrima() {
    return (
    <div>
        <h1>Ingreso de materia prima</h1>
        <br />
        <Link className="btn btn-primary w-1/4" href="/dashboard/ingresomp/addremito">Cargar Remito</Link>
    </div>
    )
}