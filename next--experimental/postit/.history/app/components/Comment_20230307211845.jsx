

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

type props = {
    id: string,
    avatar: string,
    message: string,
    name: string,
    timestamp: string,
    user: string
}
export default async function Comment({ id, avatar, message, name, timestamp, user }: props) {
    const session = await getServerSession(authOptions);
    return (

        <div key={id} className="bg-white my-6 p-8 rounded-lg">
            <div className="flex items-center gap-2">
                <img src={avatar} alt={"avatar"} width={"32"} height={"32"}
                    className="rounded-full" />
                {
                    user === session?.user?.id && <h3 className="font-bold text-gray-700">You</h3>
                                                        
                }
                {
                    user !== session?.user?.id && <h3 className="font-bold text-gray-700">{name}</h3>
                }

                <p className="text-sm text-gray-500 my-4">
                    {timestamp}
                </p>
            </div>
            <div className="my-8">
                <p className="break-all"> {message}</p>
            </div>

        </div>

    )
}
