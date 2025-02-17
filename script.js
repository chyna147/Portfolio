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
            displayMessage(getBotResponse(userInput), 'bot');
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

// Updated bot response function based on user input
function getBotResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    // Check for specific keywords in the user input and return an appropriate response
    if (lowerCaseInput.includes('programming languages') || lowerCaseInput.includes('languages')) {
        return "I am familiar with HTML, CSS, JavaScript, and React.js. These are the main languages I use to build web applications.";
    } else if (lowerCaseInput.includes('skills') || lowerCaseInput.includes('what skills')) {
        return "My skills include software development and  secure coding practices. My soft skills are good communication skills ,time management ,critical thinking , adaptability and attention to details";
    } else if (lowerCaseInput.includes('projects') || lowerCaseInput.includes('work')) {
        return "I have worked on various projects, including a hobby project about wine tasting and english poem generator. You can check out more of my work in the 'Projects' section of my portfolio!";
    } else if (lowerCaseInput.includes('certificates') || lowerCaseInput.includes('certification')) {
        return "I hold certificates in intro to web development  , cybersecurity , Artificial intelligence essemcials V2 , chatbot building essentials , Generative AI: prompt engineering ,introduction to artificial intelligence , intro to coding , introduction to cybersecurity cisco , Cybersecurity awareness HP. You can view my certificates in the 'Certificates' section of my portfolio.";
    } else if (lowerCaseInput.includes('experience') || lowerCaseInput.includes('work experience') || lowerCaseInput.includes('background')) {
        return "I have experience as a Mobile Digital Literacy Ambassador for NEMISA, a Cybersecurity learnership at IRG, and I am currently an intern for Software Development at Capaciti.";
    } else {
        // Default response if no specific keyword is found
        const responses = [
            "Hello! How can I assist you today?",
            "I'm here to help you with anything on this portfolio.",
            "Feel free to ask about my projects, skills, experience, or certifications!",
            "Thank you for visiting my portfolio!"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}



