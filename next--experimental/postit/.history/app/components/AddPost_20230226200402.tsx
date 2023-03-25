'use client';

import React, { useState } from "react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import axios  from "axios";
import { toast } from "react-hot-toast";

export default function CreatePost(){
    const [title , setTitle] = useState('');
    const [isDisabled , setIsDisabled] = useState(false);
    
    //create a post
    const {mutate} = useMutation(
        async (title: string) => await axios.post('/api/posts/add' , { title }),
        {
            onError:(error)=>{
            setIsDisabled(false);
            toast.error(error?.response?.data.message)
        },
        onSuccess(data, variables, context) {
            setIsDisabled(false)
            setTitle('')
        },
    }
    )

    const submitPost = async (e: React.FormEvent)=>{
        e.preventDefault();
        if(title.length > 300) return alert('too much')
        if(title.length < 1) return alert('too short!')
        setIsDisabled(true)
        mutate(title)
    }
    return(
        <form className="bg-white my-8 p-8 rounded-md"
        onSubmit={submitPost}>
            <div className="flex flex-col my-4">
                <textarea name="title " id="title" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value) }
                placeholder="what's in your mind ? "
                className="p-4 text-lg rounded-md my-2 bg-gray-200">
                </textarea>
            </div>
            <div className="flex items-center justify-between gap-2">
                <p className={`font-bold text-sm ${title.length > 300 ? 'text-red-700' : 'text-gray-700'}`}>
                    {`${title.length}/300`}
                </p>
                <button disabled={isDisabled}
                className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
                type="submit">
                    Create a post
                    </button>
            </div>
        </form>
    )
}