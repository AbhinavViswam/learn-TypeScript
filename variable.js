"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello";
// greetings = 6               not allowed
// greetings = true
console.log(greetings);
//number
var userId = 30;
//boolean
var isLoggedin = true;
var age = "10";
// age=10   error number is not assignable to string , typescript is smart enough to understand this
//any               when there is no need for type checking we use any
var hero;
function getHero() {
    return "Tony";
}
hero = getHero();
