'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PostType } from "../types/Post";
import Post from "./Post";

const allPosts = async () =>{
    
    const response = await axios.get("/api/posts/get")
    return response.data

    
}

export default function GetPosts(){
    const {data, error, isLoading} = useQuery<PostType[]>({
        queryFn: allPosts,
        queryKey: ["posts"],
    })
    if(isLoading) return "Loading..."
    if(error) return "Fucking Error in Internet"
   
    return(
        <div>
            {
           data?.map((post)=>(
            <Post key={post.id} name={post.user.name}
            avatar={post.user.image} title={post.title}
            timestamp={post.createdAt} id={post.id} comments={post.comments}/>
        ))
        }

        </div>


    )
}