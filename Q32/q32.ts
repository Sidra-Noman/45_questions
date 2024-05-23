// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


let current_users : string[] = ['Admin','User1','User2','User3','User4']
let new_users : string[] = ['Admin','User1','User5','User6','User7']


// Loop through the new_users list
for (let i = 0; i < new_users.length; i++) {
    // Convert new username to lowercase for case-insensitive comparison
     new_users[i].toLowerCase();

    // Check if the new username exists in the current users list (case-insensitive)
    if (current_users.includes(new_users[i])) {
        console.log(`Sorry, the username "${new_users[i]}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_users[i]}" is available.`);
    }
}
