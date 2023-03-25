'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react"
import { toast } from "react-hot-toast";


export default function AddComment({id}){
    const [title,setTitle] = useState('');
    const [isDisabled , setIsDisabled] = useState(false);

    let toastCommentID: string
    const queryClient = useQueryClient()
    //create a post
    const {mutate} = useMutation(
        async (title: string) => await axios.post('/api/posts/addComment' , { title , id}),
        {
            onError:(error)=>{
                if(error instanceof AxiosError){
                    toast.error(error?.response?.data.message, {id:toastCommentID})
                }
            setIsDisabled(false);
        },
        onSuccess(data, variables, context) {
            toast.success('comment added successfully 🔥' , {id:toastCommentID})
            setIsDisabled(false)
            // queryClient.invalidateQueries(["comments"])
            setTitle('');
        },
    }
    )
    const submitComment = async (e: React.FormEvent)=>{
        e.preventDefault();
        toastPostID = toast.loading("adding Your comment...",{id:toastPostID})
        if(title.length > 300) return toast.error("are u crazy? it's too much", {id:toastPostID})
        if(title.length < 1) return toast.error('write comment please mf:)!', {id:toastPostID})
        setIsDisabled(true)
        mutate(title)
    }
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
            <div className="flex items-center gap-2">
                <button disabled={isDisabled} onSubmit={submitComment}
                className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
                type="submit">
                    Add comment ✈️
                    </button>
                    <p className={`font-bold text-sm ${title.length > 300 ? 'text-red-700' : 'text-gray-700'}`}>
                    {`${title.length}/300`}
                </p>
            </div>
        </form>
    )
}