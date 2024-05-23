// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.



function makeShirt(size :string = "large", message :string = "I love TypeScript") {
    console.log(`Creating a ${size}-sized shirt with the message: '${message}'`);
}

// Creating a large shirt with the default message
makeShirt();

// Creating a medium shirt with the default message
makeShirt("medium");

// Creating a shirt of any size with a different message
makeShirt("small", "Typescript Rocks!");
