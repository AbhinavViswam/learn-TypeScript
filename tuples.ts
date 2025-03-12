let user : (string | number )[] = ["wsfswvg",1]
//also

user= [1,"dfdgf"]   // this is also possible , but there can be a situation where you will be needing the number to come first then the string , for such case...


const tUser :[string, number, number] =["dfr",2,5]  //the order of types mentioned inside array can be understood using tuples


let rgb : [ number , number , number]=[3,3,3]


// this can also be done as

type USer =[number , string]

const newUseR : USer =[343,"fdf"]
newUseR.push("cfef") 