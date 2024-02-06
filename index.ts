
let userId:number;
userId=45
console.log(userId);


const names:string[] = ["siva","praveen","ravi"]

//Return type for a function
const value = names.map((name:String):String=>{
    return name.toUpperCase();
})

function func1(name:String):String{
    return `my name is ${name}`
}

console.log(value)
console.log(func1("praveen"))

//Objects in functions
type objType = {
    name:String,
    Age:Number,
    isAdmin:Boolean
}
const newUser = {
    name:"siva",
    Age:22,
    isAdmin:false
}

function CreateUser(profile : objType):objType{
  
  

  let user = {
        name:profile.name+" Praveen",
        Age:profile.Age,
        isAdmin:profile.isAdmin
  }
  return user


}
const user = CreateUser(newUser)
console.log(user)

 export{}