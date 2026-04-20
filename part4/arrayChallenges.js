// 1
let teaFlavors = ["green", "black", "herbal"];
const firstTea = teaFlavors[0];

// 2
let cities = ["New York", "Los Angeles", "Chicago"];
const favoriteCity = cities[2];
// const favoriteCity = cities[cities.length-1];
console.log(favoriteCity);

// 3
let teaTypes = ["lemon tea", "ginger tea", "green tea", "black tea", "masala tea", "orange tea"];
teaTypes[1] = "jasmine tea";
console.log(teaTypes);

// 4
let citiesVisited = ["Paris", "Tokyo", "Sydney"];
// citiesVisited[citiesVisited.length] = "Berlin";
citiesVisited.push("Berlin");
console.log(citiesVisited);

// 5
let teaOrders = ["lemon tea", "green tea", "black tea"];
// teaOrders.pop();
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

// 6 (making soft-copy of an array)
let popularTeaTypes = ["lemon tea", "ginger tea", "green tea", "black tea", "masala tea", "orange tea"];
let softCopy = popularTeaTypes;
popularTeaTypes.pop();
console.log(softCopy);
console.log(popularTeaTypes);

// 7 (making hard-copy of an array)
let topCities = ["New York", "Los Angeles", "Chicago"];
let hardCopy = [...topCities];
topCities.pop();
console.log(hardCopy);
console.log(topCities);
console.log([...hardCopy]);

// 8 (merging two arrays)
let europeanCities = ["Paris", "London", "Berlin"];
let asianCities = ["Tokyo", "Beijing", "Seoul"];
let worldCities = [...europeanCities, ...asianCities];
let worldCities2 = europeanCities.concat(asianCities);
console.log(worldCities);
console.log(worldCities2);

// 9
let teaMenu = ["lemon tea", "ginger tea", "green tea", "black tea", "masala tea", "orange tea"];
let menuLength = teaMenu.length;

// 10
let cityBucketList = ["Paris", "Tokyo", "Sydney"];
let isParisInList = cityBucketList.includes("Paris");
// let isParisInList = cityBucketList.includes("paris");
console.log(isParisInList);