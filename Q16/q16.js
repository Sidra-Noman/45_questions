// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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
guestNames.forEach(function (item) {
    console.log("Dear ".concat(item, ", You are invited for a dinner at my home."));
});
