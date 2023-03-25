'use client'

import axios from "axios"

const fetchAuthPOsts = async () => {
    const response = await axios.get('/api/posts/auth')
    return response.data
}
export default async function MyPosts(){
    const posts = await fetchAuthPOsts()
    return(
        <div>
            <h1>data</h1>
        </div>

    )
}