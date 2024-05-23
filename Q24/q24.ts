// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array



;

// Tests for equality and inequality with strings

let fruit1 = 'Apple';
let fruit2 = 'Mango';

// console.log("Test for equality with strings: 'fruit1' == 'fruit1'. I predict True.");
// console.log('fruit1' == 'fruit1');

// console.log("Test for inequality with strings: fruit1 != fruit2. I predict True.");
// console.log(fruit1 != fruit2)

// // Tests using the lower case function
// console.log("Test using the lower case function: 'HELLO WORLD'.toLowerCase() == 'hello world'. I predict True.");
// console.log('HELLO WORLD'.toLowerCase() == 'hello world');

// // Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let num1 = 10;
// let num2 = 20;

// console.log("Numerical test for equality: num1 == num2. I predict False.");
// console.log(num1 == num2);

// console.log("Numerical test for inequality: num1 != num2. I predict True.");
// console.log(num1 != num2);

// console.log("Numerical test for greater than: num2 > num1. I predict True.");
// console.log(num2 > num1);

// console.log("Numerical test for less than: num2 < num1. I predict False.");
// console.log(num2 < num1);

// console.log("Numerical test for greater than or equal to: num2 >= num1. I predict True.");
// console.log(num2 >= num1);

// console.log("Numerical test for less than or equal to: num1 <= num2. I predict True.");
// console.log(num1 <= num2);

// // Tests using "and" and "or" operators
// let a = 4;
// let b = 8;
// let c = 12;

// console.log("Test using 'and' operator: a < b && b < c. I predict True.");
// console.log(a < b && b< c);

// console.log("Test using 'or' operator: a > b || b < c. I predict True.");
// console.log(a > b || b < c);

// // Test whether an item is in an array
let colors = ['red', 'pink', 'orange','green','yelllow'];

// console.log("Test whether 'green' is in the array: colors.includes('green'). I predict True.");
console.log(colors.includes('green'));
// OR

// console.log(colors.indexOf('green') !== -1);

// // Test whether an item is not in an array
console.log("Test whether 'blue' is not in the array: !colors.includes('blue'). I predict True.");
console.log(!colors.includes('blue'));
// OR

// console.log(colors.indexOf('blue') == -1);