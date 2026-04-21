// checking a number is greater than another number
let num1 = 10;
let num2 = 20;

/*
console.log("i am regular upper code");
if (num1 > num2) {
    console.log("num1 is greater than num2");
} else {
    console.log("num1 is not greater than num2");
}
console.log("i am regular bottom code");
*/

// checking if a string is equal to another string
/*
let username = "Hafiz";
let anotherUsername = "Hafiz";

if (username == anotherUsername) {
    console.log("pick another username");
} else {
    console.log("you can use this username");
}
*/

// checking if a variable is number or not
let value = 10;
// let value = "10";
// let value = []; // etar type hobe object

if (typeof value === "number") {    // === is used for strict equality check, it checks both value and type
    console.log("value is a number");
} else {
    console.log("value is not a number");
}


// checking if a boolean value is true or false
let isTeaReady = false;
if (isTeaReady) {
    console.log("tea is ready");
} else {
    // console.log("tea is not ready");
}

// checking if an array is empty or not
// let items = [];
let items=["item1"];
console.log(items.length);
if (items.length === 0) {
    console.log("array is empty");
} else {
    console.log("array is not empty");
}