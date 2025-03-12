//it is similar to any and better than any
var score;
score = "dddd";
// score=true this causes error
score = 45;
//custom types
var abhi = {
    name: "Abhi",
    age: 22
};
abhi = { username: "dfdg", id: 54 };
//function and types
function doTask(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return id + 2;
}
//array and union
var data = [1, 2, 3]; /// this means array can be either number or string not both
var data1 = [1, 2, "three"];
// fixed assignment
var pi = 3.14;
// pi=34 not possible, it can only be 3.14
var direction;
direction = "N";
// direction = "Ww" error
