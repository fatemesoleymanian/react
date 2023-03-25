import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/client"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === 'GET'){
      
      const session = await getServerSession(req,res,authOptions)
      if(!session) return res.status(401).json({message:'Pleas sign in!'})
      
      //get auth users posts
       try{
          const data = await prisma.user.findUnique({
            where:{
                email: session.user?.email?
            }
          })
          res.status(200).json(data)
       }
       catch(error){
          return res.status(500).json({message:error})
       }
  
      }
    
}