'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allPosts = async () =>{
    const response = await axios.get("/api/posts/get")
    return response.data
}
export default async function GetPosts(){
    const {data: Array , error, isLoading} = useQuery({
        queryFn: allPosts,
        queryKey: ["posts"],
    })
    if(error) return error
    if(isLoading) return "Loading..."
    return(
        <div>
            {/* {
                data.map(post=>(
                    <h1>{post.title}</h1>
                ))
            } */}
        </div>

    )
}