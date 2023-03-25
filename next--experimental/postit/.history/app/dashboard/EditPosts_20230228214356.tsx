'use client'

import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import Toggle from "./Toggle"

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
    const [toggle,setToggle] = useState(false);
    const {mutate} = useMutation(
        async(id:string)=> 
        await axios.delete('/api/posts/destroy',{data:id }),{
            onError:(error)=>{
                console.log(error)
                setToggle(!toggle)
            },
            onSuccess:()=>{
                alert('success')
                setToggle(true)
            }
        }
    )
    const toggleHandler = ()=>{
        setToggle(!toggle)
    }
    const deletePost = ()=>{
        mutate(id)
    }
    
    return(
       <>
        <div className="bg-white my-8 p-8 rounded-lg">
            <div className="flex items-center gap-2">
            <img src={avatar} alt={"avatar"} width={"32"} height={"32"}
            className="rounded-full"/>
            <h3 className="font-bold text-gray-700">{name}</h3>
            </div>
            <div className="my-8">
                <p className="break-all">{title}</p>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-sm font-bold text0-ray-700">
                    {
                        comments?.length
                    }
                </p>
                <button onClick={toggleHandler}
                className="text-sm font-bold text-red-500">
                    Delete
                    </button>
            </div>
        </div>
       { toggle && <Toggle deletePost={deletePost}/>}
       </>
    )
}