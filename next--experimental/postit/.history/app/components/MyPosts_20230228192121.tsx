'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { AuthPosts } from "../types/AuthPosts"

const fetchAuthPOsts = async () => {
    const response = await axios.get('/api/posts/auth')
    return response.data
}
export default function MyPosts(){
    const {data , isLoading} = useQuery<AuthPosts>({
        queryFn: fetchAuthPOsts,
        queryKey: ['auth-posts']
    })
    
    return(
        <div>
            <h1>data</h1>
        </div>

    )
}