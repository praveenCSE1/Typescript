interface user{
    name:String,
    age:number,
    start:()=>string,
    func:(details:user)=>{name:String,courses:Number,isPaid:boolean}
}

function start1(){
    console.log("start interface")
    return " "
}

let details=(person:user)=>{
    
    let details = {
        name:person.name,
        courses:5,
        isPaid:false
    }
    console.log(details)
    return details

}
const praveen:user = {name:"praveen",age:23,start:start1,func:details}

praveen.start();

praveen.func(praveen);

export{}