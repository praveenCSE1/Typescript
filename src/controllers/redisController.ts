import redisClient from "../models/redisModel"

import {NextFunction, Request,Response} from "express"


export async function redisfunction(req:Request,res:Response,next:NextFunction){

  await redisClient.connect()

 const data =  await redisClient.set(req.user.userID,req.user);

 console.log(data)


}

