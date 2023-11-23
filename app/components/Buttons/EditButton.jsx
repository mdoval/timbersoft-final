'use client'

export function EditButton({onclick}) {
    return (
    <button className="h-12 bg-green-500 text-white rounded-lg shadow-lg" onClick={onclick}>
        <span className="mr-12 ml-12">Modificar</span>
    </button>
    )
}