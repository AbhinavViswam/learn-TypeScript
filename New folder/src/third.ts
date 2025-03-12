// abstract class TakePhoto{
//     constructor(
//         public mode:string,
//         public filter:number
//     ){}

//     abstract getTime():number
//     getReelTime():number{
//         return 7
//     }
// }



// class Instagrams extends TakePhoto{
//     getTime(): number {
//         return 6
//     }
// }

// // const a = new TakePhoto("test",5) abstract class cannot have its own instance but can have the instance of the class which extends it

// const a = new Instagrams("test",5)
// a.getTime()
// a.getReelTime()