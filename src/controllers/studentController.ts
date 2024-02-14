import { studentDetails,Student } from "../models/studentModel";
import {Request,Response} from "express"

const adduser = async(req:Request,res:Response)=>{
    try{   
    
      const newUser:Student = new studentDetails({
        userId:req.user.userId,
        name: req.body.name,
        email:req.body.email,
        department: req.body.department,
        phn: req.body.mobileNumber,       
        dob: req.body.dateOfBirth
    });
    
  const savedUser = await newUser.save();
   console.log(savedUser);
   res.status(200).json({ message: 'Profile Added'});
    }
    catch(error){
      console.error(error);
      res.status(500).json({ message: 'Error while adding the user'});
                 
    }
    
}

const updateuser = async (req:Request,res:Response) => {
    try {
        
        //console.log(req.user.userId)
        let current:Student | null = await studentDetails.findOneAndUpdate(
          {userId:req.user.userId}, 
          {
            $set: {
              name: req.body.name,
              email: req.body.email,
              department: req.body.department,
              phn: req.body.phn,
              dob: req.body.dateOfBirth,
              
            },
          },
          { new: true} 
        );
  
      if (!current) {
        return res.status(404).json({ message: 'User not found' });
      }
           
        res.json({ message: 'User updated successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while updating the user' });
    }
  }

  const deleteuser = async (req:Request,res:Response) => {
    try {
      
      const deleteUser = await studentDetails.findById(req.body._id);
  
      console.log(deleteUser);
  
      if (!deleteUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await deleteUser.deleteOne();
  
      res.json({ message: 'User deleted successfully', user: deleteUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error while deleting the user' });
    }
  }

  const users = async(req:Request,res:Response)=>{    
    try {
     
      const all= await studentDetails.find({});
      
      res.json(all);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal error' });
      
    }
  }

  const myprofile = async(req:Request,res:Response)=>{    
    try {
    
      const profile = await studentDetails.find({userId:req.user.userId});
   
      res.json(profile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Profile Not found' });
      
    }
  }
export {adduser,deleteuser,updateuser,users,myprofile};