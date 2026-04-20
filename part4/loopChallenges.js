// 1 Write a program to calculate the sum of the first 5 natural numbers using a while loop.
let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);


// 2 (5 to 1 countdown into an array using while loop)
let countdown = [];
let j = 5;
while (j > 0) {
    countdown.push(j);
    j--;
}
console.log(countdown);


// 3 (do while loop to take user input until they type "stop")
/*
 let teaCollection=[];
let tea;
do{
    tea = prompt(`type your favourite tea (type "stop" to finish)`);
    if(tea!=="stop"){
        teaCollection.push(tea);
    }


}
while(tea!=="stop");
 */

// 4 (1-3 sum using do while loop)
let total = 0;
let k = 1;
do {
    total += k;
    k++;
}
while (k <= 3);
console.log(total);


// 5 (multiply each number in an array by 2 using for loop and store the results in a new array)
let multipliedNumbers = [];
let numbers = [2, 4, 6];
for (let l = 0; l < numbers.length; l++) {
    // takeNumber = numbers[l] * 2;
    // multipliedNumbers.push(takeNumber);
    multipliedNumbers.push(numbers[l] * 2);
}
console.log(multipliedNumbers);


// 6 (taking an array of cities and creating a new array with the same cities using a for loop)
let cities = ["New York", "Los Angeles", "Chicago"];
let cityList = [];
for (let c = 0; c < cities.length; c++) {
    cityList.push(cities[c]);
}
console.log(cityList);