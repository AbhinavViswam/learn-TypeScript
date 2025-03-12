const a = []   //this will give the type of array as never so you wont be able push any data
const a1:[]=[]// same as before

// a1.push("hl")
// a.push("fg")


const superHeroes :string[] =[]

//another way
const hitPoints : Array<number> =[]

superHeroes.push("Spiderman")
hitPoints.push(2)

type User = {
    name:string
    isActive:boolean
}

const alluser : Array<User>=[]
// const alluser : User[]=[]   same as above

alluser.push({name:"Abhinav",isActive:true})

const MLModels :number[] []=[
    [45],
    [4545]
]  //it is an array which only accepts array of number

MLModels.push(
        [33]
)






export {}