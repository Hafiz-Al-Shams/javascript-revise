// number

let balance = 1000;
let anotherBalance = new Number(1000);

// console.log(balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());
// console.log(typeof balance);
// console.log(typeof anotherBalance);

// boolean

let isActive = true;
let isReallyActive = new Boolean(true); //not recommended to use Boolean constructor

// console.log(isActive);
// console.log(isReallyActive);
// console.log(isReallyActive.valueOf());
// console.log(typeof isActive);
// console.log(typeof isReallyActive);


// null and undefined
// let firstName;
// console.log(firstName); //undefined
// let middleName = null;
// console.log(middleName); //null
// let lastName = undefined;
// console.log(lastName); //undefined


// string
let myString = "Hello";
let anotherString = new String("Hello, World!");
console.log(myString);
console.log(anotherString);
console.log(anotherString.valueOf());
console.log(typeof myString);
console.log(typeof anotherString);

let userName = "John";
let oldGreeting = myString + " " + "Sourav!";
let oldGreeting2 = myString + " Sourav!";

let newGreeting = `${myString} Sourav !`; //template literals or string interpolation
console.log(oldGreeting);
console.log(oldGreeting2);
console.log(newGreeting);

console.log(`The length of the string is: ${myString.length}`);
console.log(`4 multiplied by 5 is: ${4 * 5}`);


// symbol
let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1==sym2); //false
console.log(sym1===sym2); //false
console.log(sym1);
console.log(sym1.valueOf()==sym2.valueOf()); //false

let sym3 = Symbol("description");
let sym4 = Symbol("description");

console.log(sym3==sym4); //false
console.log(sym3===sym4); //false
console.log(sym3);
console.log(sym3.valueOf()==sym4.valueOf()); //false