// 1 = write a for loop that loops through an array and stops when it finds a specific value

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let selectedFruits = [];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "date") {
        break;
    }
    selectedFruits.push(fruits[i]);
}
console.log(selectedFruits);


// 2 = write a for loop that will loop through an array and store all elements into a new array with skipping a specific value
let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
let filteredCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "chicago" || cities[i] === "Chicago") {
        continue;
    }
    filteredCities.push(cities[i]);
}
console.log(filteredCities);


// 3 = use a "for of" loop to iterate through an array and stops when it finds a specific value and store the values into a new array
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num)
}
console.log(smallNumbers);


// 4 = use a "for of" loop to iterate through an array and store all elements into a new array with skipping a specific value
let teaTypes = ["black tea", "green tea", "herbal tea", "masala tea"];
let filteredTeaTypes = [];
for (const tea of teaTypes) {
    if (tea === "green tea") {
        continue;
    }
    filteredTeaTypes.push(tea);
}
console.log(filteredTeaTypes);


// 5= use a "for in" loop to iterate through an object and stops the loop when it finds population of 'Berlin' and store the populations into a new object

let citiesPopulation = {
    NewYork: 8419000,
    "Los Angeles": 3980000,
    Chicago: 2716000,
    Berlin: 3645000,
    Tokyo: 13960000
};
let filteredPopulation = {};

// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));
for (const city in citiesPopulation) {
    // console.log(city);
    // console.log(citiesPopulation[city]);
    // key = value
    if (city == "Berlin") {
        break;
    }
    filteredPopulation[city] = citiesPopulation[city];
}
console.log(filteredPopulation);


// 6= use a "for in" loop to iterate through an object and store all populations into a new object with skipping any population below 3 million
let worldCities = {
    NewYork: 8419000,
    "Los Angeles": 3980000,
    Chicago: 2716000,
    Berlin: 3645000,
    Tokyo: 13960000,
    Paris: 2148000,
    Sydney: 5312000

};
let largeCitiesPopulation = {};
for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue;
    }
    largeCitiesPopulation[city] = worldCities[city];
}
console.log(largeCitiesPopulation);