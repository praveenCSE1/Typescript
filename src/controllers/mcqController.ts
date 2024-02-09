import {Request,Response} from "express"
import { McqModel,Question } from "../models/mcqQuestionModel"
import {McqResult,mcqResult} from "../models/mcqResultModel"

 export const displayQuestions = async(req:Request,res:Response)=>{

    try{

        const data = await McqModel.find({})

        console.log(data);

        res.json(data);

    }
    catch(error){

        res.status(500).json({message:'Error while fetching the data'})
    }


}

export const add_mcq = async(req:Request,res:Response)=>{
    try{
        const newMcq = new McqModel<Question>({
            question:req.body.question,
            options:req.body.options,
                  
        });
        const savedUser = await newMcq.save();
        res.status(200).json({ message: 'mcq added successfully'});

    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'Error while add the mcq'})
    }
}

export  const storeResult = async(req:Request,res:Response)=>{
    try{
        const newResult = new mcqResult({
            userId:'dsfsfdedfdfsecvnmoe',
            username:req.body.username,
            Result:req.body.result,
            marksObtained:req.body.marksObtained,
            TotalAttempts:req.body.TotalAttempts,
            Date: Date.now()
        });
        const saveresult = await newResult.save();
        
        res.status(200).json({message:saveresult})
    }
    catch(error){
        res.status(500).json({message: 'Error while adding the mcq result'})
    }
}

export const displayResult = async(req:Request,res:Response)=>{

    try{
        // const result = await McqModel.findOne({userId:req.user.userId})
        const result = await mcqResult.find({})
        console.log(result+'d')
        res.status(200).json(result) 
    }
    catch(error){
        res.status(500).json({message:'Error while fetching the mcq result'})
    }
} 


