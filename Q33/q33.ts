// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// Store numbers 1 through 9 in an array
let numbers :number[]=[1,2,3,4,5,6,7,8,9];


// Loop through the array
for (let i = 0; i < numbers.length; i++) {


    // Use an if-else chain to print the proper ordinal ending for each number
    if (numbers[i] === 1) {
        console.log(numbers[i] + "st");
    } else if (numbers[i] === 2) {
        console.log(numbers[i] + "nd");
    } else if (numbers[i] === 3) {
        console.log(numbers[i] + "rd");
    } else {
        console.log(numbers[i] + "th");
    }
}