
import {mongoose} from "./db";

export interface User {
    email:string,

    password:String
}
const userschema: mongoose.Schema = new mongoose.Schema<User>({  
    email: String,
    password:{
        type:String
    }    
}); 

const Users = mongoose.model('registers',userschema)

export  {Users}