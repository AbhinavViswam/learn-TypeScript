"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
addTwo(5);
getUpper("hello");
function signupUser(name, isCompleted, age) {
    console.log("g");
}
signupUser("Hello", true, 2);
var login = function (username, age, password) {
    if (password === void 0) { password = true; }
};
login("Abhi", 22);
login("Abhi", 22, false);
function addnum(num) {
    return "Hello"; //this is allowed ,but this may cause problem since we expect a number to be returned, but we have a soluton for this too... 
}
function addnum1(num) {
    // return "helo"    causes error...
    return 5;
}
var adddnum = function (n) {
    return 1;
};
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
heroes.map(function (hero) {
    return "hero is ".concat(hero);
    // return 4     error
});
// function which return none
function Helllo(num) {
    console.log("fjf");
    // return ""  it causes error since it return void that is it doesnot return
}
function handleError(err) {
    throw new Error(err);
}
