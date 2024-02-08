import express from 'express';
import  { Users,User} from '../models/signup';
import bcrypt from 'bcrypt'

const router = express.Router();


router.post('/signup', async (req,res) => {

  try{
 
    const email=req.body.email
     const password=req.body.password
 
    //find whether the email already exist or not
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
    }
    const hpassword = await bcrypt.hash(password,10)

    console.log(hpassword);
    const NewUser = new Users<User>({email:email,password:hpassword});

     const save = await NewUser.save().then(User=>{
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
