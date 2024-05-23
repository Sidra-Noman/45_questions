// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Create an array of car objects
var cars = [
    {
        brand: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Silver"
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2021,
        color: "Black"
    },
    {
        brand: "Ford",
        model: "Mustang",
        year: 2020,
        color: "Red"
    },
    {
        brand: "Tesla",
        model: "Model 3",
        year: 2023,
        color: "Blue"
    }
];
// Print information about each car
cars.forEach(function (item) {
    console.log("Brand: ".concat(item.brand));
    console.log("Model: ".concat(item.model));
    console.log("Year: ".concat(item.year));
    console.log("Color: ".concat(item.color));
});
