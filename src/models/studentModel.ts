import { mongoose } from "./db"

export interface Student extends mongoose.Document{

    userId:string,
    name:string,
    email:string,
    department:string,
    phn:string,
    dob:Date

}
 const studentDetails:mongoose.Schema<Student> = new mongoose.Schema<Student>({
    userId:String,
    name:String,
    email:String,
    department:String,
    phn:String,
    dob:Date,
   
  })
 const details = mongoose.model<Student>("Student",studentDetails);

 export {details as studentDetails}



