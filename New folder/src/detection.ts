interface User{
    name:string,
    email:string
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}



function isAdminAccount(account:User | Admin ){
    if("isAdmin" in account){
       console.log(account.isAdmin);
        
    }
    else{
        console.log(false);
        
    }
}

isAdminAccount({name:"Abhinav",email:"Email"})
isAdminAccount({name:"Abhinav",email:"Email",isAdmin:true})


interface Circle {
    kind:"circle",
    radius:number
}

interface Square{
    kind:"square",
    side:number
}
interface Rectangle{
    kind:"rectangle",
    height:number,
    width:number
}

type Shape = Circle | Square | Rectangle

// function getArea(shape:Shape){
//     if(shape.kind=="circle"){
//         return Math.PI * shape.radius * shape.radius
//     }
//     return shape.side*shape.side
// }


function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.side*shape.side
        case "rectangle":
            return shape.height*shape.width
        default :
        const _defaultShape :never=shape
        return _defaultShape
    }
}

