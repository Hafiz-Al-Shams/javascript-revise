let cityPopulation = {
    NewYork: 8419000,
    "Los Angeles": 3980000,
    Chicago: 2716000,
    Berlin: 3645000,
    Tokyo: 13960000,
    singapore: 1700000
};
let filteredCities = {};
for (const city in cityPopulation) {
    if (cityPopulation[city] < 3000000) {
        continue;
    }
    filteredCities[city] = cityPopulation[city];
}
console.log(filteredCities);