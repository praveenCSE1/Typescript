import {Request,Response} from "express"
import { McqModel,Question,CategoryModel } from "../models/mcqQuestionModel"
import {McqResult,mcqResult} from "../models/mcqResultModel"

 export const displayQuestions = async(req:Request,res:Response)=>{

    try{
        const categoryId = req.params.id;

        console.log(categoryId)

        // const newCategory = new CategoryModel({ name: 'History' });
        // await newCategory.save()

        const mcqs= await McqModel.find({ category:categoryId});
        

        if (!mcqs) {
          return res.status(404).json({ error: 'Category not found' });
        }
    
 
        res.json({ mcqs });
    }
    catch(error){

        res.status(500).json({message:'Error while fetching the data'})
    }


}

export const displayCategories = async(req:Request,res:Response)=>{
    try{

        const categories = await CategoryModel.find({})

        res.status(200).json({categories})

    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'Error while displaying the categories'})
    }
}

export const add_mcq = async(req:Request,res:Response)=>{
    try{
        const question = req.body.question;
        const options = req.body.options;
        const category = req.body.category;

        
        if (!question || !options || !category) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

       
        const newMcq: Question = new McqModel({
            question,
            options,
            category
        });

        
        await newMcq.save();

        res.status(200).json({ message: 'MCQ added successfully' });

    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'Error while add the mcq'})
    }
}

export  const storeResult = async(req:Request,res:Response)=>{
    try{
        const newResult:McqResult = new mcqResult({

            userId:req.user.userId,
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
        
        const result:McqResult|null = await mcqResult.findOne({userId:req.user.userId})
        console.log(result+'d')
        res.status(200).json(result) 
    }
    catch(error){
        res.status(500).json({message:'Error while fetching the mcq result'})
    }
} 


