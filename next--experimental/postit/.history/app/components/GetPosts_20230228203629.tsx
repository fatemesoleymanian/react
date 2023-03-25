'use client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { PostType } from "../types/Post";
import Post from "./Post";

const allPosts = async () =>{
    const response = await axios.get("/api/posts/get")
    return response.data
}

export default function GetPosts(){
    const [internetFlag,setInternetFlag] = useState(false);
    const {data, error, isLoading} = useQuery<PostType[]>({
        queryFn: allPosts,
        queryKey: ["posts"],
    })
    if(error) return setInternetFlag(true)
    if(isLoading) return "Loading..."
    console.log(data)
    return(
        <div>
            {
           internetFlag &&  data?.map((post)=>(
            <Post key={post.id} name={post.user.name}
            avatar={post.user.image} title={post.title}
            timestamp={post.createdAt} id={post.id} comments={post.comments}/>
        ))
        }
        {
            !internetFlag && <div>
                <p>Fucking internet Problems</p>
            </div>
        }

        </div>


    )
}