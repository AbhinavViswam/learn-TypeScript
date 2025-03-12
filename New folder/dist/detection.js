"use strict";
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        console.log(account.isAdmin);
    }
    else {
        console.log(false);
    }
}
isAdminAccount({ name: "Abhinav", email: "Email" });
isAdminAccount({ name: "Abhinav", email: "Email", isAdmin: true });
// function getArea(shape:Shape){
//     if(shape.kind=="circle"){
//         return Math.PI * shape.radius * shape.radius
//     }
//     return shape.side*shape.side
// }
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.height * shape.width;
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
