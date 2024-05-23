// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



let magician : string[] =['Hary Porter','Hermione Ganger','Ron Weasley','Albus Dumbledone']
 function show_magicians(magicians :string[]){
    magician.forEach(item =>
        { 
            console.log(item);
        });
 }
 show_magicians (magician)