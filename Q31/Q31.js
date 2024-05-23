// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var users = ["John", "Alice", "Bob"];
// Check if the list of users is not empty
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the list of users and print each username
    for (var i = 0; i < users.length; i++) {
        console.log("User:", users[i]);
    }
    // Remove all usernames from the array
    users = [];
    // Check again if the list of users is empty
    if (users.length === 0) {
        console.log("We need to find some users!");
    }
}
