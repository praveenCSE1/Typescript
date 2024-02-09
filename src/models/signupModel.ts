
import {mongoose} from "./db";

export interface User extends mongoose.Document{

    email:string,

    password:string,

    role:string

}
const userschema: mongoose.Schema = new mongoose.Schema<User>({  
    email: String,
    password:{
        type:String
    },
    role:{
        type:String,
        default:'USER'
    }  
}); 

const Users = mongoose.model<User>('registers',userschema)

export  {Users}