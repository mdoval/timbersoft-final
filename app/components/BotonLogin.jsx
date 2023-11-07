'use client'

import { signIn } from "next-auth/react"

export default function BotonLogin() {
    const url = process.env.siteUrl+'/dashboard'
    return (
        <button className="bg-blue-300 p-5 border-solid border-grey-200 m-2 rounded-full" onClick={() => signIn(undefined, { callbackUrl: url }, { prompt: "login" })}>Ingresar</button>
//        <button className="bg-blue-200 p-5 border-solid border-grey-200 m-2 rounded-full" onClick={() => signIn()}>Ingresar</button>
)
}