'use client'

export function SubmitButton({text, onclick}) {
    return (
    <button type="submit" className="h-12 bg-blue-500 text-white rounded-lg shadow-lg">
        <span className="mr-12 ml-12">{text}</span>
    </button>
    )
}