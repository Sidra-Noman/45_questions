// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// • Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ['Orange', 'Mango', 'Strawberry'];
// Check if certain fruit is in the array
// if (favorite_fruits.includes("Orange"))
if (favorite_fruits.indexOf("Orange") !== -1) {
    console.log("You really like Orange!");
}
// if (favorite_fruits.includes("Mango")) 
if (favorite_fruits.indexOf("Mango") !== -1) {
    console.log("You really like Mango!");
}
// if (favorite_fruits.includes("Strawberry")) 
if (favorite_fruits.indexOf("Strawberry") !== -1) {
    console.log("You really like Strawberry!");
}
// Check if "grape" is in the array
// if (favorite_fruits.includes("grape"))
if (favorite_fruits.indexOf("grapes") !== -1) {
    console.log("You really like grapes!");
}
// Check if "kiwi" is in the array
// if (favorite_fruits.includes("kiwi"))
if (favorite_fruits.indexOf("kiwi") !== -1) {
    console.log("You really like kiwis!");
}
