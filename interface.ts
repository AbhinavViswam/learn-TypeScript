
interface User {
    readonly _id : number
    email:string,
    userId :number,
    googleid ? :string,
    // startTrial : ()=> string     same as below
    startTrial?():string
    getCoupon ?(coupon:string):number
}


//we can again use Interface User to add more ... , it is called reopening of interface

interface User {
    githubToken : string
}


//the name in the coupon does not need to match with the argument name we are passing
const abhi : User = {_id:46 ,email: "edgkjlevjn",userId:555,startTrial :()=>{return "hello"},getCoupon:(c:"dfd")=>{return 10}, githubToken:"dfdg"}

//inheritance

interface Admin extends User {
    adminid:string | number
}

const newUser0 : Admin = {
    _id:34,
    email:"dfsf",
    userId:3434,
    githubToken:"#433",
    adminid:343
}




export {}