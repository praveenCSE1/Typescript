import jwt, { Secret } from "jsonwebtoken"
import dotenv from 'dotenv';
import {Request,Response,NextFunction} from "express"
dotenv.config();

interface UserPayload{
    userId:string,
    userRole:string
}

function generateToken(userId:string,userRole:string):string{
    
    const payload = {userId,role:userRole}
    const token = jwt.sign(payload,process.env.SECRET_KEY as Secret,{ expiresIn: '45m' })
    return token
}

function verifyToken(req:Request, res:Response, next:NextFunction) {
 
    const tok:string|undefined = req.headers['authorization'];
    const token:string|undefined = tok?.split(' ')[1]
  
    if (!token) {
      return res.status(403).json({ message: 'Token is required' });
    }
  
    jwt.verify(token, process.env.SECRET_KEY as Secret, { algorithms: ['HS256'] }, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      
      req.user = decoded as UserPayload;
      next();
    });
  }

function isAdmin(req:Request, res:Response, next:NextFunction){
   
    if (req.user?.role !== 'ADMIN') {

        return res.status(401).json({ message: 'Requires Admin access for this page' });       
      }
      next();
}

export {generateToken,verifyToken,isAdmin}