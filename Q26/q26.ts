// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.


// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.


// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color :string = 'Green';
if (alien_color === 'Green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
 alien_color = 'Red';
if (alien_color === 'Green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}