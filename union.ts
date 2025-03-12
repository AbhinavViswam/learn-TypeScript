//it is similar to any and better than any

let score : number | string 

score="dddd"
// score=true this causes error
score=45

type User = {
    name:string,
    age:number
}

type Admin = {
    username:string,
    id:number
}

//custom types

let abhi : User | Admin = {
    name:"Abhi",
    age:22
}

abhi = {username:"dfdg",id:54}

//function and types

function doTask(id : number | string){
    if(typeof id === "string"){
        return id.toUpperCase()
    }
    return id+2
}

//array and union


const data : string[] | number [] =[1,2,3] /// this means array can be either number or string not both

const data1 : (string | number)[] = [1,2,"three"]

// fixed assignment

let pi:3.14 = 3.14

// pi=34 not possible, it can only be 3.14

let direction :"N" | "S" | "W" | "E"

direction = "N"
// direction = "Ww" error

export {}