'use client';

import { useState } from "react";

export default function AddPost(){
    const [title , setTitle] = useState('');
    
    return(
        <form>
            <div>
                <textarea name="title " id="title" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value) }
                placeholder="  what's in your mind ? ">
                </textarea>
            </div>
        </form>
    )
}