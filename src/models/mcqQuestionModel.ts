import {mongoose} from "./db"

export interface Question{
    
    question:String,
    options:[{option:string, isCorrect:boolean}]

}


const mcqSchema:mongoose.Schema = new mongoose.Schema<Question>({

    question:{
        type:String
    },
    options:[{option: String, isCorrect: Boolean}]

})

const McqModel = mongoose.model('mcqQuestions',mcqSchema)

export {McqModel}