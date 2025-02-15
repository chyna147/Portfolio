// Toggle chat window visibility
function toggleChatbot() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = (chatWindow.style.display === 'none' || chatWindow.style.display === '') ? 'flex' : 'none';
}

// Send message to the chat window
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        displayMessage(userInput, 'user');
        document.getElementById('userInput').value = '';

        // Simulate a bot response after a short delay
        setTimeout(() => {
            displayMessage(getBotResponse(), 'bot');
        }, 1000);
    }
}

// Display message on the chat
function displayMessage(message, sender) {
    const messageContainer = document.createElement('p');
    messageContainer.classList.add(sender);
    messageContainer.innerText = message;
    document.getElementById('chatMessages').appendChild(messageContainer);
}

// Sample bot responses
function getBotResponse() {
    const responses = [
        "Hello! How can I assist you today?",
        "I'm here to help you with anything on this portfolio.",
        "Feel free to ask about my projects, skills, or certifications!",
        "Thank you for visiting my portfolio!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}


