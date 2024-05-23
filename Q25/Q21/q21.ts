
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface carType {
    brand: string;
    model: string;
    year: number;
    color: string;
}

// Create an array of car objects
const cars: carType[] = [
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
    }]
;

// Print information about each car
cars.forEach(item=> {
    console.log(`Brand: ${item.brand}`);
    console.log(`Model: ${item.model}`);
    console.log(`Year: ${item.year}`);
    console.log(`Color: ${item.color}`);
   
});