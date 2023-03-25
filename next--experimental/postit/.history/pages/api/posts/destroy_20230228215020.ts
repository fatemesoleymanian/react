import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/client"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === 'DELETE'){
      
      const session = await getServerSession(req,res,authOptions)
      if(!session) return res.status(401).json({message:'Please sign in to make post!'})
      
      //get title 
      const id: string = req.body.id
      //get user
      const user = await prisma.user.findUnique({
        where: {email: session?.user?.email}
      })

       //check title
       if(!id) return res.status(403).json({message:"Choose a post!"});
      
       try{
          const result = await prisma.post.delete()
          res.status(200).json(result)
       }
       catch(error){
          return res.status(500).json({message:error})
       }
  
      }
    
}