'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Post from "./Post";

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
        <div>
            {
            data?.map((post)=>(
                <Post key={post.id} name={post.user.name}
                avatar={post.user.avatar} title={post.title}
                timestamp={post.createdAt}/>
            ))
        }

        </div>


    )
}