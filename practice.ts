let arr : string[] = []
arr.push("hello")
console.log(arr)

let arr1: (string|number)[]=[]
arr1.push("hello")
arr1.push(454)
console.log(arr1)

type Coordinate = {
    x:number,
    y:number
}
const place:Coordinate ={
    x:34,
    y:56
}
console.log(place);
type newCoordinate = {
    z:number
}
const newplace : Coordinate & newCoordinate = {
    x:34, y:46,z :45
}
console.log(newplace)
type arrr=[number,string]

let arr2 : number[][]=[]
arr2.push([1,2,3,4])
console.log(arr2)

const enum seats{
    back="Enjoying the fun of music",
    middle="Dancing with the music",
    front="Watching the beauty of places"
}
let member1 = seats.back
let member2 = seats.middle
let member3 = seats.front
console.log(member1,member2,member3)


interface details {
    age:number
}
interface details {
    name:string
}
interface User extends details {
    readonly id : string,
    password:string,
    dob?:string
}
const person :details={
    name:"Abhinav",
    age:22
}
const person1 : User = {
    id :"ffvfb",
    name:"afafkf",
    age:11,
    password:"egfdkg"
}
console.log(person)
console.log(person1)

function ADD(num:number):number{
    return num+num
}
console.log(ADD(6));
let arr4 = [1,2,3,4,5]
console.log(arr4.map((num:number):number=>{
    return num
}));



export{}