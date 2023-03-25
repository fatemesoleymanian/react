'use client'

import { useState } from "react"


export default function AddComment({id}){
    const [title,setTitle] = useState('');
    return(
        <form className="my-8">
            <h3>Add a comment</h3>
            <div className="flex flex-col my-2">
                <input type="text"
                onChange={(e)=> setTitle(e.target.value)} 
                value={title}
                name="title"
                className="p-4 text-lg rounded-md my-2"/>
            </div>
        </form>
    )
}