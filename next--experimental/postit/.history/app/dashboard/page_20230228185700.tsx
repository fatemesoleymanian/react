import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function Dashboard(){
    const session = getServerSession(authOptions)
    const name = session.name
    return(
        <main>
            <h1 className="text-2xl font-bold">Welcome back</h1>
        </main>
    )
}