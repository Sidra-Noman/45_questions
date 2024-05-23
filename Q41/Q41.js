// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician = ['Hary Porter', 'Hermione Ganger', 'Ron Weasley', 'Albus Dumbledone'];
function show_magicians(magicians) {
    magician.forEach(function (item) {
        console.log(item);
    });
}
show_magicians(magician);
