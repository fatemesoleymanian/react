'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

const allPosts = async () =>{
    const response = await axios.get("/api/posts/get")
    return response.data
}
export default function GetPosts(){
    const {data, error, isLoading} = useQuery({
        queryFn: allPosts,
        queryKey: ["posts"],
    })
    if(error) return error
    if(isLoading) return "Loading..."
    console.log(data)
    return(
        <div className="bg-white my-8 p-8 rounded-lg">
            <div className="flex items-center gap-2">
                <Image src={avatar} alt={} width={32} height={32}
                className="rounded-full"/>
                <h3 className="font-bold text-gray-700">{name}</h3>

            </div>
        </div>

    )
}