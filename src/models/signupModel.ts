
import {mongoose} from "./db";

export interface User {

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

const Users = mongoose.model('registers',userschema)

export  {Users}