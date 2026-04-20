const username = {
    firstname: "hafiz",
    // lastname: "sourav",
    "last name": "sourav",
    isLoggedIn: true
};

username.firstname = "H";
username.age = 30;

console.log(username.firstname);
console.log(username["last name"]);
console.log(username.age);
console.log(username);
console.log(typeof username);

let today = new Date();
console.log(today);
console.log(typeof today);
console.log(today.getDate());

// array
let anotherUser = ["hafiz", 30, true];
console.log(anotherUser[0]);
console.log(anotherUser[2]);


// javascript's implicit type conversion
let num1 = 5;
let num2 = "10";
console.log(num1 + num2); //510
console.log(num2 + num1); //105

let isValue= true;
console.log(isValue + 1); //2
console.log(isValue + true); //2
console.log(isValue + false); //1

// let anotherValue = "11";
let anotherValue = "11abc";
console.log(Number(isValue)); //1
console.log(typeof Number(isValue));
console.log(Number(anotherValue));
console.log(typeof Number(anotherValue));
console.log(Number(undefined));
console.log(Number(null));