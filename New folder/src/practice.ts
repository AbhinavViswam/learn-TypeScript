console.log("Hello classes")

class User {
    public name:string
    protected age:number
    constructor(
        name:string,
        age:number
    ){
        this.name =name
        this.age=age
    }

    get getAge():number{
        return this.age
    }
    
    
}

const user1 = new User("Abhinav" ,22)
// console.log(user1.name);
// console.log(user1.getAge);

class User2 extends User{
    constructor(
        name:string,
        age:number
    ){
        super(
            name,
            age
        )
    }
    display():void{
        console.log(this.name,this.age);
        
    }
}

const user2 = new User2("Abhinav" ,22)
user2.display()