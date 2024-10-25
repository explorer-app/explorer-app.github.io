// Navigation toggle for small screens
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Array of messages to display in the hero section
const messages = [
    "Hi, Hello! Welcome to Explorer.",
    "We build amazing software solutions.",
    "Need help? Our developers are ready!",
    "Let's explore your next project together!"
];

let messageIndex = 0; // Current message index
let charIndex = 0; // Current character index
const typingSpeed = 100; // Speed of typing (ms)
const delayBetweenMessages = 1500; // Delay between messages (ms)

const greetingElement = document.getElementById("greeting");

// Function to type each message
function typeMessage() {
    if (charIndex < messages[messageIndex].length) {
        greetingElement.textContent += messages[messageIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, typingSpeed);
    } else {
        setTimeout(eraseMessage, delayBetweenMessages);
    }
}

// Function to erase the current message
function eraseMessage() {
    if (charIndex > 0) {
        greetingElement.textContent = messages[messageIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseMessage, typingSpeed / 2);
    } else {
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(typeMessage, typingSpeed);
    }
}


const slider = document.getElementById('testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showNextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Slide every 4 seconds
setInterval(showNextTestimonial, 4000);


// Start the typing animation after the DOM is fully loaded
window.addEventListener("load", typeMessage);
