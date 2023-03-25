"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FormPost() {
 const [title,setTitle] = useState('');
 const [userId,setUserId] = useState(1);
 
const router = useRouter();

 async function submitPost(e:React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`/api/createPost`,{
        method:"POST",
        body:JSON.stringify({title,userId})
    })
    const res = await data.json()
    setTitle('')
    router.refresh()
    if(!res.ok) console.log(res.message)
 }
  return (
    <form onSubmit={submitPost} className="py-5 px-6">
        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className="border rounded"/>
        <button type="submit">Make a new post</button>
    </form>
  )
}
