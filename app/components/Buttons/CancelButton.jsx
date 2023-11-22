'use client'

export function CancelButton({text, onclick}) {
    return (
    <button className="h-12 bg-red-500 text-white rounded-lg shadow-lg mr-2" onClick={onclick}>
        <span className="mr-12 ml-12">{text}</span>
    </button>
    )
}