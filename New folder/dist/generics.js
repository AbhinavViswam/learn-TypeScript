"use strict";
// const score :Array<number>=[]
// const names :Array<string>=[]
// function IdentityOne(val:boolean | number):boolean|number{
//     return val
// }
// function IdentityTwo<Type>(val:Type):Type{                  // here if i give a number as input then it will lock that type also we dont neet to give it as Type itself it can be any letter or word
//     return val
// }
// IdentityTwo("helo")
// IdentityTwo(5)
// interface Bottle{
//     brand:string,
//     price:number
// }
// IdentityTwo<Bottle>({brand:"walter", price:20})
// function getProducts<T>(pdct:T[]):T{
//     return pdct[4]
// }
// interface Database{
//     connection:string,
//     dbname:string
// }
// function anotherFunction<T,U extends Database>(val1:T,val2:U):object{
//     return {
//     }
// }
// anotherFunction("hello",{connection:"",dbname:""})
// interface Quiz{
//     name:string,
//     type:string
// }
// interface Course {
//     name:string,
//     author:string,
//     subject:string
// }
// class sellable<T>{
//     private cart:T[]=[]
//     addtocart(pdct:T){
//         this.cart.push(pdct)
//     }
// }
// const user1 = new sellable<Course>()
// user1.addtocart({name:"Abhinav",author:"Abhinav",subject:"CS"})
// console.log(user1);
