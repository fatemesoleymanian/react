import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../prisma/client"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === 'GET'){
      
      
      //get title 
      const title: string = req.body.title
     
       try{
          const result = await prisma.post.findMany({
            data:{
              title,
            }
          })
          res.status(200).json(result)
       }
       catch(error){
          return res.status(500).json({message:error})
       }
  
      }
    
}