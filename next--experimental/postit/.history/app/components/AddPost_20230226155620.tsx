'use client';

import { useState } from "react";

export default function CreatePost(){
    const [title , setTitle] = useState('');
    
    return(
        <form className="bg-white my-8 p-8 rounded-md">
            <div className="flex flex-col my-4">
                <textarea name="title " id="title" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value) }
                placeholder="what's in your mind ? "
                className="p-4 text-lg rounded-md my-2 bg-gray-200">
                </textarea>
            </div>
            <div>
                <button disabled={disabled}
                className="text-sm bg-teal-600 text-white py-2 px-4"
                type="submit">
                    Create a post
                    </button>
            </div>
        </form>
    )
}