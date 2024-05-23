// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians = ['Hary Porter', 'Hermione Ganger', 'Ron Weasley', 'Albus Dumbledone'];
function show_magicians(magicians) {
    console.log(magicians);
}
function make_great(magicians) {
    return magicians.map(function (magicians) { return "".concat(magicians, " The Great"); });
}
var magiciancopy = ['Hary Porter', 'Hermione Ganger', 'Ron Weasley', 'Albus Dumbledone'];
var greatMagicians = make_great(magiciancopy);
console.log("\n Great Magicians");
console.log(greatMagicians);
