// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestNames : string[] =['Ashhad','Jawad','Muneeb','Waiz'];
guestNames.forEach((item) =>(
    console.log(`Dear ${item}, You are invited for a dinner at my home.`)
))

// let guestList :string[] = [
//     "Albert Einstein",
//     "Maya Angelou",
//     "Leonardo da Vinci"
// ];

// guestList.forEach(person => {
//     console.log(`Dear ${person},\n\nYou are cordially invited to dinner. Your presence would greatly enrich our evening with your wisdom and inspiration.\n\nLooking forward to seeing you soon!`);
// });