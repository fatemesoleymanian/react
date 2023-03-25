
'use client';

import Image from "next/image";
import Link from "next/link";
type props={
    id: string,
    avatar: string,
    title: string,
    name: string,
    timestamp:string
    comments:object
}
export default function Post({comments,id,avatar,title,name,timestamp}:props){
    return(
        <div className="bg-white my-8 p-8 rounded-lg">
        <div className="flex items-center gap-2">
            {/* <Image src={avatar} alt={name} width={32} height={32}
            className="rounded-full"/> */}
            <img src={avatar} alt={"avatar"} width={"32"} height={"32"}
            className="rounded-full"/>
            
            <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8">
            <p className="break-all">{title}</p>
        </div>
        <p className="text-sm text-gray-500 my-4">
                {timestamp}
                </p>
                <div className="flex gap-4 cursor-pointer items-center">
                    <Link href={`/post/${id}`}>
                        <p className="text-sm font-bold text-gray-700">
                            {comments?.length}Comments
                        </p>
                    </Link>
                </div>
        </div>       

    )
}
