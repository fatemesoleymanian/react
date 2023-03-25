'use client';

import axios from "axios";

const allPosts = async () =>{
    const response = await axios.get("/api/posts/get")
    return response.data
}
export default function GetPosts(){
    const posts = await allPosts();
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