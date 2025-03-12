// console.log("hello");

// //public and private
// //everything wich is not marked become public

// class User {
//     private courseCount= 1
//     protected course=5
//     name:string         //this is not marked but it us public
//     private age:number  // also can use #   , private is in TS only # is from js
//     public city:string = "kannur"   
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }

//     private deleteToken(){
//         console.log("deleted");
//     }

//     get getEmail():string{                          //get is used to get any property
//         return `${this.name}@email.com`
//     }

//     set setmail(count:number){                      //set has no return type
//         this.courseCount=count
//     }

// }

// const abhinav = new User("abhinav",22)
// console.log(abhinav.name);
// console.log(abhinav.city);
// abhinav.getEmail
// // console.log(abhinav.age);     dont work


// class SubUser extends User{
//     isMarried:boolean=true
//     changeCourseCount(){
//         // this.courseCount = 5   not possible but
//         this.course =4     // this is protetcted so it can be accessed from derved classes
//     }
    
// }
