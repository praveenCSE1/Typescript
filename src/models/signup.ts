
import {mongoose,Model} from "./db";

export interface User {
    email:string,

    password:string
}
const userschema: mongoose.Schema = new mongoose.Schema<User>({  

    email: String,

    password:{
        type:String
    }
    
}); 

const Users = Model('registers',userschema)

export  {Users}