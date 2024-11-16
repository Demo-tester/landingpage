// Function to generate sparkles
function generateSparkles(num) {
    const sparkleContainer = document.getElementById('sparkleContainer');

    for (let i = 0; i < num; i++) {
        const sparkle = document.createElement('span');

        // Randomize position and animation delay
        const topPos = Math.random() * 100 + '%';
        const leftPos = Math.random() * 100 + '%';
        const delay = Math.random() * 2 + 's';

        sparkle.style.top = topPos;
        sparkle.style.left = leftPos;
        sparkle.style.animationDelay = delay;

        sparkleContainer.appendChild(sparkle);
    }
}

// Call the function to generate 50 sparkles
generateSparkles(100);

// Array of love messages
const loveMessages = [
    "You're my sunshine on a rainy day! ☀️",
    "Every moment with you feels like a dream come true. 💕",
    "You're the reason my heart beats so fast! ❤️",
    "Together, we create magic. ✨",
    "My world is brighter because of you. 🌟",
    "I love you more than words can express. 🥰",
    "You make life so beautiful. 💖",
    "You're my favorite chapter in life's book. 📖❤️",
    "Every day with you is a gift I'll always cherish. 🎁💘",
    "You're my everything. Forever and always. 💞",
];

// Function to toggle chatbot visibility
function toggleChatbot() {
    const chatbotPopup = document.getElementById("chatbot-popup");
    chatbotPopup.style.display = chatbotPopup.style.display === "block" ? "none" : "block";
}

// Function to send a random love message
function sendMessage() {
    const messageBox = document.getElementById("message-box");
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    messageBox.innerHTML = `<p>${randomMessage}</p>`;
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    audio.muted = false; // Unmute audio if allowed by the browser
});