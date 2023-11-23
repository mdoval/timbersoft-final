'use client'

export function DeleteButton({onclick}) {
    return (
    <button className="h-12 bg-red-500 text-white rounded-lg shadow-lg" onClick={onclick}>
        <span className="mr-12 ml-12">Borrar</span>
    </button>
    )
}