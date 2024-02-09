
import {Request,Response} from "express"
import {Users,User} from "../models/signupModel"
import { generateToken } from "./jwtController"
import bcrypt from "bcrypt"

const signup = async (req:Request,res:Response) => {

    try{
   
      const email=req.body.email
       const password=req.body.password
   
      //find whether the email already exist or not
      const existingUser:User|null = await Users.findOne({ email });

      if (existingUser) {
              return res.status(400).json({ message: 'Email already exists' });
      }
      const hpassword = await bcrypt.hash(password,10)
  
      
      const NewUser:User = new Users({

        email:email,
        password:hpassword

    });
  
       const save = await NewUser.save().then(User=>{
        console.log(User);
        res.status(200).json({message:"success",user:User})
  
      })
  
    }
    catch(err){
      console.log(err)
        res.status(500).json({message:"Error while storing the user data"})
      }
  }
const login = async(req:Request,res:Response)=>{
    try{

        const email = req.body.email;

        const password = req.body.password;

        const user : User | null= await Users.findOne({email})

        if(!user){

            return res.status(400).json({ message: 'Invalid Credentials' });

        }
        const Userpassword = await bcrypt.compare(password, user.password);

        if(Userpassword){

          const token = generateToken(user._id,user.role)    
          console.log(token);     
          res.status(200).json({ status: 'success',data:{ userID:user._id,role:user.role,email:user.email},token: token, });
    

        }


    }
    catch(error){

        console.log(error)
        res.status(500).json({message:"Error while login the user data"})

    }
}

  export {signup,login}