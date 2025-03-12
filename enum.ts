
const enum seats {
    Window = "Hello",
    Middle =5,
    Aisle           //this will automatically get value as 6 since the above value is 5
}

const aSeat = seats.Aisle

console.log(aSeat)