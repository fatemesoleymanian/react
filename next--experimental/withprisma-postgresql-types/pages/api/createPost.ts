import prisma from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'


type postProps = {
    title: string ,
    userId: number   
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try{
        const post :postProps = JSON.parse(req.body)
        console.log('!!!!!!!!!!!!!!!!!!!')
        if(req.method === "POST"){
            console.log("ksmdknjkcn")
            if(!post.title.length){
                 return res.status(500).json({message:"Please do not leave this empty!"})
            }
            try{
                const dataa = await prisma.post.create({
                    data: {
                        title: post.title,
                        userId : post.userId
                    },
                })
                return res.status(200).json(dataa)
            }catch(error){
                return res.status(500).json({message:"Error creating this post!"})
            }
        }
    }catch(error){
        return res.status(500).json(error)
    }
    
}