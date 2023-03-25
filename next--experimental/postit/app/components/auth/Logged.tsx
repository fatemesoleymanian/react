'use client'

import { signOut } from "next-auth/react"
import Link from "next/link"

type User = {
    image : string
}
export default function Logged({image}:User) {
return(
    <li className="flex gap-6 items-center">
        <button className="bg-gray-700 text-white text-sm px-6 py-2 rounded-md"
        onClick={()=> signOut()}>
            Sign out
        </button>
        <Link href={'/dashboard'}>
        <img width={'40'} height={'40'} src={image} alt={'alt'}  className="rounded-full"/>
        {/* <Image width={64} height={64} src={'https://lh3.googleusercontent.com/a/AGNmyxbyosBA053P5EC6jEwd1B8G6SXtpVTaMSuXxjnF=s96-c'} alt={'alt'} priority className="w-14 rounded-full"/> */}
        {/* Image didnot work here=/ */}
        </Link>
    </li>
)
}