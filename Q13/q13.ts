// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let vehicles : string[] = ['car','bus','cycle','train','aeroplane','motorcycle'];
// console.log('I would like to ride on' + " " + vehicles[0])
// console.log('I would like to ride on' + " " + vehicles[1])
// console.log('I would like to ride on' + " " + vehicles[2])
// console.log('I would like to ride on' + " " + vehicles[3])
// console.log('I would like to ride on' + " " + vehicles[4])
// console.log('I would like to ride on' + " " + vehicles[5])
vehicles.map((item) =>(
    console.log(`I would like to ride on ${item}`)
))