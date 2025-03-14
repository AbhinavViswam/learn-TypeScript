"use strict";
console.log("Hello classes");
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get getAge() {
        return this.age;
    }
}
const user1 = new User("Abhinav", 22);
// console.log(user1.name);
// console.log(user1.getAge);
class User2 extends User {
    constructor(name, age) {
        super(name, age);
    }
    display() {
        console.log(this.name, this.age);
    }
}
const user2 = new User2("Abhinav", 22);
user2.display();
