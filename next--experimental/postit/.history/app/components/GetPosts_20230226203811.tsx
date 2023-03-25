'use client';

import axios from "axios";

const allPosts = async () =>{
    const response = await axios.get("/api/posts/get")
    return response.data
}
export default function GetPosts(){

}