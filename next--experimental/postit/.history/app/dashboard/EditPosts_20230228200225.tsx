'use client'

import { useState } from "react"

export type EditProps ={
    title : string
    id: string
    avatar: string
    name: string
   
    comments?:{
        id: string
        postId: string
        userId: string
    }[]
}
export default function EditPosts({avatar, name , title, comments ,id}:EditProps){
    const [titlee,setTitlee] = useState(title);
    
    return(
        <div className="bg-white my-8 p-8 rounded-lg">
            <div>
            <img src={avatar} alt={"avatar"} width={"32"} height={"32"}
            className="rounded-full"/>
            </div>
        </div>
    )
}