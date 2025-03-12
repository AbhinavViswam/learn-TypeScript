// // const user = {
// //     name:"Abhi",
// //     email:"abhi@email.com",
// //     isActive:true
// // }

// // function createUser({name:string,isPaid:boolean}){}


// // createUser({name:"abhinav",isPaid:true})


// // //a fn that returns an object

// // function createCourse():{name:string}{
// //     return {name:"hello"}
// // }


// //creating a new type
// type User = {
//     name:string;
//     email:string;
//     isActive:boolean
// }

// function createUser(user:User):User{
//     return user
// }

// createUser({name:"",email:"",isActive:true})


type User = {
    readonly _id: string    // readonly is a keyword that makes _id cannot be changed
    name:string
    email:string
    isActive:boolean
    creditCard?:number       //the ? means it is optional , the user can either add creditcard or not
}

let user : User = {
    _id:"1234",
    name:"abhi",
    email:"email",
    isActive:true
}

// user._id ="" cannot assign since it is readonly

let user2 : User = {
    _id:"1234",
    name:"abhi",
    email:"email",
    isActive:true,
    creditCard:4566
}


type CardNumber = {
    cardnumber : string
}

type CardDate = {
    carddate:string
}

type cardDetail = CardNumber & CardDate &{
    cvv : number
}

let cardDetails : cardDetail={
    cardnumber:"454",
    carddate:"54",
    cvv:545
}

console.log(cardDetails)
export {}