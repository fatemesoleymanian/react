import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/client"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === 'POST'){
      
      const session = await getServerSession(req,res,authOptions)
      if(!session) return res.status(401).json({message:'Please sign in to make comment!'})
      
      //get title 
      const title: string = req.body.title
      //get post id
      const post: string = req.body.id
      //get user
      const user = await prisma.user.findUnique({
        where: {email: session?.user?.email}
      })

       //check title
       if(title.length > 300) return res.status(403).json({message:'Please write a shorter post!'});
       if(title.length < 1) return res.status(403).json({message:"Title can't be empty!"});
      
       try{
          const result = await prisma.comment.create({
            data:{
              message,
              userId : user.id,
              postId : post
            }
          })
          res.status(200).json(result)
       }
       catch(error){
          return res.status(500).json({message:error})
       }
  
      }
    
}