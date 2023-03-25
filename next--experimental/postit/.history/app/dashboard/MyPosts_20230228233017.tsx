'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { AuthPosts } from "../types/AuthPosts"
import EditPosts from "./EditPosts"

const fetchAuthPOsts = async () => {
    const response = await axios.get('/api/posts/auth')
    return response.data
}
export default function MyPosts(){
    const {data , isLoading ,error} = useQuery<AuthPosts>({
        queryFn: fetchAuthPOsts,
        queryKey: ['auth-posts']
    })
    if(isLoading) return <h1>Posts are loading...</h1>
    if(error) return <div>"Fucking Error in Internet X_X"</div>

    return(
        <div>
            {
                data?.posts?.map((post)=> <EditPosts id={post.id} title={post.title} avatar={data.image}
                key={post.id} name={data.name} comments={post.comments}/>)
            }
        </div>

    )
}