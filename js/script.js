// Get the HTML element where the greeting message will be displayed
const greetingElement = document.getElementById("greeting");

// Get the current hour from the system time
const currentHour = new Date().getHours();

// Variable to store the greeting message
let greetingMessage;

// Check the time and set the appropriate greeting
if (currentHour < 12) {
    greetingMessage = "Good morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good afternoon!";
} else {
    greetingMessage = "Good evening!";
}

// Display the greeting message on the webpage
greetingElement.textContent = greetingMessage;
