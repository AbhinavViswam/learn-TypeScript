function addTwo(num:number){

    return num + 2
}

function getUpper(val:string){
    return val.toUpperCase()
}


addTwo(5)

getUpper("hello")


function signupUser(name: String ,isCompleted:boolean,age:number){

    console.log("g")
}

signupUser("Hello",true,2)

let login = (username:string,age:number,password:boolean=true) =>{

}

login("Abhi",22)
login("Abhi",22,false)

function addnum(num:number){
    return "Hello"                      //this is allowed ,but this may cause problem since we expect a number to be returned, but we have a soluton for this too... 
}

function addnum1(num:number):number{
    // return "helo"    causes error...
    return 5;
}

const adddnum = (n:number):number => {
    return 1;
}

const heroes = ["thor","spiderman","ironman"]
heroes.map(hero=>{
    return `hero is ${hero}`
})

heroes.map((hero):string=>{
    return `hero is ${hero}`
    // return 4     error
})



// function which return none

function Helllo(num:number):void{
    console.log("fjf")
    // return ""  it causes error since it return void that is it doesnot return
}

function handleError(err:string):never {            //never is close to void, it represents value which are never observed , mainly used for error handling function
    throw new Error(err)
}






export {}