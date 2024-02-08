import express, { Request, Response } from 'express';
import  { Users,User} from '../models/signup';
const router = express.Router();


router.post('/data', async (req,res) => {
  try{
   

  


     const data = new Users<User>({

      email:req.body.email,
      password:req.body.password,
      
    })

     const save = await data.save().then(User=>{
      console.log(User);
      res.status(200).json({message:"success",user:User})
    })

  }
  catch(err){
    console.log(err)
      res.status(500).json({message:"Error while storing the user data"})
    }
});

export {router}
