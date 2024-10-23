const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// Array of messages to display
const messages = [
    "Hi, Hello! Welcome to Explorer.",
    "We build amazing software solutions.",
    "Need help? Our developers are ready!",
    "Let's explore your next project together!"
];

let messageIndex = 0;  // Keep track of which message to display
let charIndex = 0;     // Keep track of the current character being typed
const typingSpeed = 100;  // Typing speed in milliseconds
const delayBetweenMessages = 1500;  // Delay before starting the next message

const greetingElement = document.getElementById("greeting");

// Function to type out the current message
function typeMessage() {
    if (charIndex < messages[messageIndex].length) {
        greetingElement.textContent += messages[messageIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, typingSpeed);  // Continue typing the next character        
    } else {
        // After typing the message, pause before starting the erase effect
        setTimeout(eraseMessage, delayBetweenMessages);
    }
}

// Function to erase the current message
function eraseMessage() {
    if (charIndex > 0) {
        greetingElement.textContent = messages[messageIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseMessage, typingSpeed / 2);  // Faster erasing
    } else {
        // Move to the next message in the array (loop back to start if needed)
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(typeMessage, typingSpeed);
    }
}

// Ensure the function runs only after the DOM is fully loaded
window.addEventListener("load", typeMessage);
