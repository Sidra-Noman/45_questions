// Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ['Lahore', 'Islamabad', 'Murree', 'Abbotabad', 'Sawat'];
// Print the array in its original order
console.log("Original order:");
console.log(places);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log(places.sort());
// Show that the array is still in its original order
console.log("\nOriginal order again:");
console.log(places);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log(places.sort().reverse());
// Show that the array is still in its original order
console.log("\nOriginal order again:");
console.log(places);
// Reverse the order of the list
console.log("\nReversed order:");
console.log(places.reverse());
// Reverse the order of the list again to show it's back to its original order
console.log("\nBack to original order:");
console.log(places.reverse());
// Sort the array in alphabetical order and print to show the order has changed
console.log("\nSorted in alphabetical order:");
console.log(places.sort());
// Sort the array in reverse alphabetical order and print to show the order has changed
console.log("\nSorted in reverse alphabetical order:");
console.log(places.sort().reverse());
