
import {mongoose} from "./db"

export interface McqResult extends mongoose.Document{

    userId:string,
    username:string,
    Result:string,
    
    marksObtained:{
        type:Number,default:0
    },
    TotalAttempts:{type:Number,default:0}
    Date:Date


}

const mcq1:mongoose.Schema = new mongoose.Schema<McqResult>({


    userId:String,
    username:String,
    Result:String,
    marksObtained:{type: String, default: 0},
    TotalAttempts:{type: Number, default: 0},
    Date: { type: Date, default: Date.now }
})

const mcqResult= mongoose.model<McqResult>("mcqResults",mcq1 );

export {mcqResult}