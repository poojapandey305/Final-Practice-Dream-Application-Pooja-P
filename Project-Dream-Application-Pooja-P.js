//                                     Dream Application:Water Drinking Reminder Application

//task 3
//1. Values, Data Types, and Operations
        // This module, enables us work with different data types such as numbers to track time, and strings for messages.
        // Values, Data Types, and Operations Example
        // Comment: This demonstrates the use of data types (numbers for time calculations) and basic arthemetic oprations like addition and multiplication.
        // To Track the time when the reminder should occur (in milliseconds).

let reminderInterval = 2 * 60 * 60 * 1000; // 2 hours in milliseconds //

let currentTime = Date.now(); // Get current timestamp in milliseconds

console.log("Reminder interval in milliseconds:", reminderInterval);

// Use arithmetic to calculate the next reminder time
let nextReminder = currentTime + reminderInterval;
console.log("Next reminder time:", new Date(nextReminder));

// Example output: Reminder in 2 hours

//2. Stringing Characters Together

        //comment-We will use ''string concatenation'' to generate reminders to show when it's time to drink water.
        //and create a personalized reminder message
        // Stringing Characters Together Example
let userName = "Krish";  // Assume user's name is stored here
let reminderMessage = "Hey " + userName + ", it's time to drink water!";

console.log(reminderMessage); // Example output: "Hey Krish, it's time to drink water!"

//3. Control Structures and Logic
    //Comment:This skill helps us control the flow of our application, such as checking if it's time for the next water reminder.
    // We will use an if statement to check if the current time is greater than or equal to the time of the next reminder.
    // Check if it's time for the reminder

let nextReminder2 = Date.now() + 7200000; // Set the first reminder to 2 hours from now (7200000 ms)

// Function to check if it's time for the reminder
function checkReminder() {
    // Check if the current time is equal to or greater than the next reminder time
    if (Date.now() >= nextReminder) {
        console.log("Time to drink water!");
        // Set the next reminder 2 hours from now
        nextReminder = Date.now() + 7200000;

    } else {
        console.log("Not yet time for your next reminder.");
    }
}

////////////////////////////////////////////////////////////

//4. Working with Loops-

// Simulate reminders every 2 hours using a simple loop (we will limit to 3 reminders for this example)
let remindersSent = 0; // Counter for the number of reminders

// Repeat the reminder every 2 hours (simulated with a loop here)
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("Reminder: It's time to drink water!");//here using reminder without username.
    remindersSent++;
  }, i * 2 * 60 * 60 * 1000); // Set reminder every 2 hours (2 hours in milliseconds)


}


//6. Building Arrays 
//Comment: .
 //here using arrays to store and manage multiple users or multiple reminders to keep track of multiple users and their reminder times.
// Building Arrays Example

// Array of users and their reminder times
//This users1 array holds objects containing the names of users and their next reminder times
let users = [
    { name: "Krish", nextReminder: Date.now() + reminderInterval },
    { name: "Meera", nextReminder: Date.now() + reminderInterval }
];

// Example output: Users' reminder times
console.log("Users' next reminder times:", users);

//6. Using Arrays
//We can iterate through the array of users and check if it's time for each user's water reminder.
 //We use forEach() to loop through the users array and check if it's time for each user to receive a reminder.
// Using Arrays Example


// Define reminder interval (in milliseconds, 2 hours)


const reminderInterval1 = 7200000; // 2 hours = 7200000 milliseconds

// Define check interval (in milliseconds, for example, checking every 1 minute)
const checkInterval = 60000; // 1 minute = 60000 milliseconds

// Array of users
let users3 = [
    { name: "krish", nextReminder: Date.now() + reminderInterval },
    { name: "Meera", nextReminder: Date.now() + reminderInterval },
    { name: "Sam", nextReminder: Date.now() + reminderInterval }
];

// Simulate checking all users' reminder times 
let checkUserReminders = setInterval(function() {
    let currentTime = Date.now();

    users3.forEach(function(user) {
        // Check if it's time for the reminder
        if (currentTime >= user.nextReminder) {
            console.log("Hey " + user.name + ", it's time to drink water!");
            
            // Update the user's next reminder time (2 hours from now)
            user.nextReminder = currentTime + reminderInterval;
        }
    });
}, checkInterval); // This will check every minute (60000 ms)

// Every minute, it checks if any user's reminder time has passed and triggers "Time to drink water!".
//example output: no output
//output explaination- using array code will show no output because each user has same timeinterval and  still 2 hours to get the remindar from current time.


