'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const allPosts = async () =>{
    const response = await axios.get("/api/posts/get")
    return response.data
}
export default async function GetPosts(){
    const {data , error, isLoading} = useQuery({
        queryFn: allPosts,
        queryKey: ["posts"],
    })
    return(
        <div>
            {
                posts.map(post=>(
                    <h1>{post.title}</h1>
                ))
            }
        </div>

    )
}