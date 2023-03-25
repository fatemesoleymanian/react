'use client'

import { useState } from "react"


export default function AddComment({id}){
    const [title,setTitle] = useState('');
    const [isDisabled , setIsDisabled] = useState(false);

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
                <p className={`font-bold text-sm ${title.length > 300 ? 'text-red-700' : 'text-gray-700'}`}>
                    {`${title.length}/300`}
                </p>
                <button disabled={isDisabled}
                className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
                type="submit">
                    Add comment
                    </button>
            </div>
        </form>
    )
}