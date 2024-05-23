// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestNames = ['Ashhad', 'Jawad', 'Muneeb', 'Waiz'];
var oldGuest = "Ashhad";
//  console.log(oldGuest +' '+'cannot make the dinner.')
guestNames.splice(0, 1, 'Shayan');
console.log(guestNames);
//  guestNames.forEach((item)=>{
//     console.log(`Dear ${item}, I found a big dinner table.`)
//  })
guestNames.unshift('Meerab');
console.log(guestNames);
guestNames.push('Humna');
console.log(guestNames);
guestNames.splice((guestNames.length / 2), 0, "Ayesha");
console.log(guestNames);
// guestNames.forEach((item)=>{
//     console.log(`Dear ${item}, You are invited for a dinner at my home.`)
//  })
console.log(guestNames.length + " " + "people" + " " + 'are invited to dinner.');
