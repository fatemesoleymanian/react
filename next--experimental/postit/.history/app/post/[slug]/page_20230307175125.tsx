'use client'

import Post from "@/app/components/Post"
import { PostType } from "@/app/types/Post"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const post = async (slug:string) =>{

    const response = await axios.get(`/api/posts/${slug}`)
    return response.data

    
}
export default function PostDetail(){
    const {data, error, isLoading} = useQuery<PostType[]>({
        queryFn: post,
        queryKey: ["post"],
    })
    if(isLoading) return "Loading..."
    if(error) return "Fucking Error in Internet X_X"
    console.log(data)
    return(
        <div>
            {/* <Post comments={data.comments} id={data.id} avatar={} title={} name={} timestamp={}
            /> */}
        </div>
    )
}