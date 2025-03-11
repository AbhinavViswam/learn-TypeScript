let greetings: string = "Hello"

// greetings = 6               not allowed
// greetings = true
console.log(greetings)

//number

let userId: number = 30;

//boolean

let isLoggedin:boolean = true


let age = "10"

// age=10   error number is not assignable to string , typescript is smart enough to understand this

//any               when there is no need for type checking we use any

let hero;

function getHero(){
    return "Tony"
}

hero = getHero();




export {}