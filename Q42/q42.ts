// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians : string[] =['Hary Porter','Hermione Ganger','Ron Weasley','Albus Dumbledone']
 function make_great(magicians :string[]){
    for (let i=0; i<magicians.length; i++){

        magicians[i]=`The Great ${magicians[i]}`;
    }
}

function show_magicians(magicians :string[]){
console.log(magicians);
}

make_great(magicians);
show_magicians(magicians);