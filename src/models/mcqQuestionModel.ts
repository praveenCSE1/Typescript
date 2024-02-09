import {mongoose} from "./db"

export interface Question extends mongoose.Document{
    
    question:String,
    options:[{option:string, isCorrect:boolean}]

}


const mcqSchema:mongoose.Schema = new mongoose.Schema<Question>({

    question:{
        type:String
    },
    options:[{option: String, isCorrect: Boolean}]

})

const McqModel = mongoose.model<Question>('mcqQuestions',mcqSchema)

export {McqModel}