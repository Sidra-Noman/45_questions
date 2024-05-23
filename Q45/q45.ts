// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function createCar(manufacturer :string, modelName :string, ...options :any[]) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Loop through the options and add them to the car object
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i];
        let value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional name-value pairs
let carInfo = createCar("Toyota", "Camry", "color", "blue", "year", 2022);

// Print the object returned by the function
console.log(carInfo);
