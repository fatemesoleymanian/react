'use client'

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
export default function EditPosts({avatar, name , title, comments ,id}){
    
    
    return(
        <div></div>
    )
}