import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Logged from "./Logged";

export default async function Nav(){
const session = await getServerSession(authOptions);
console.log(session)

    return(
        <nav className="flex justify-between items-center py-8 ">
            <Link href={'/'}>
                <h1 className="font-bold text-lg">Send</h1>
            </Link>
            <ul className="flex items-center gap-6">
                {!session?.user && <Login />}
                {session?.user && <div><h6>Hi {session.user.name}! </h6><Logged image={session.user?.image || ""} /> </div>}
            </ul>
        </nav>
    )
}