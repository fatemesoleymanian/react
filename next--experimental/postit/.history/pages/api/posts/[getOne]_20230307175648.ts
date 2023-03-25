import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../prisma/client"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === 'GET'){
        const slug = req.body
      
       try{
        //fetch all posts
          const result = await prisma.post.findFirst({
            where:{
                slug:slug
            },
            include:{
                user: true,
                comments: true
            }
          })
          res.status(200).json(result)
       }
       catch(error){
          return res.status(500).json({message:"Error fetching post!"})
       }
  
      }
    
}