// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicians : string[] =['Hary Porter','Hermione Ganger','Ron Weasley','Albus Dumbledone']
function show_magicians(magicians :string[]){
    console.log(magicians);
    
    }
    function make_great(magicians){
        return magicians.map((magicians) =>`${magicians} The Great`);
    }
     const magiciancopy = ['Hary Porter','Hermione Ganger','Ron Weasley','Albus Dumbledone']
     const greatMagicians = make_great(magiciancopy);
     console.log("\n Great Magicians");
     console.log(greatMagicians)
