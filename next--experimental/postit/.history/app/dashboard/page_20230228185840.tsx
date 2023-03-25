import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Dashboard(){
    const session = await getServerSession(authOptions)
    if(!session) return redirect('/api/auth/signin')
    const name = session.name
    return(
        <main>
            <h1 className="text-2xl font-bold">Welcome back</h1>
        </main>
    )
}