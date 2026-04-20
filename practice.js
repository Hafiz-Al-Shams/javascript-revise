// checking if a value is number or not

// let value = 10;
let value = "10";
if (typeof value === "number") {
    console.log("value is a number");
} else {
    console.log("value is not a number");
}

// checking if a boolean value is true or false
// let isLoggedIn = false;
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("user is logged in");
} else {
    console.log("user is not logged in");
}


// checking if an array is empty or not
// let items = [];
let items = ["item1"];
console.log(items.length);
if (items.length === 0) {
    console.log("array is empty");
} else {
    console.log("array is not empty");
}

console.log("hello world");
console.log(5 + 6);
function test() { }
test()

let score = 10;
score += 6;
console.log(score);

let arr = ["1", "tea", true, 10];
console.log(arr);
let user = { "firstname": "hafiz", age: 31, isLoggedIn: true };
console.log(user);

let ispaidUser = false;
let isLogedIn = true;
console.log(ispaidUser || isLogedIn);
let havecar = false;
let havehouse = true;
console.log(havecar && havehouse);

let myScore = 2 + 3 - 1 * 6;
console.log(myScore);
let myScore2 = 2 + (3 - (1 * 6));
console.log(myScore2);

let remaindr = 20 % 6;
console.log(remaindr);
console.log(myScore == myScore2);
console.log(myScore != myScore2);


let tody = new Date();
console.log(tody.getDate());
console.log(tody);

console.log(user["firstname"]);

if (typeof myScore === "number") {
    console.log("myScore is a number");
}
else {
    console.log("myScore is not a number");
}

if (arr.length === 0) {
    console.log("arr is empty");
}
else {
    console.log("arr is not empty");
}