// server.js

// 1. Import the Express framework
const express = require('express');
const cors = require('cors');

// 2. Initialize the application
const app = express();
const PORT = 5000;// Use different port than React app

// 3. Middleware to handle CORS
app.use(cors());

// 4. Add built-in middleware to parse JSON request bodies
app.use(express.json()); 

// Dummy data
const flashcardData = [
    { id: 1, question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { id: 2, question: 'What is a component?', answer: 'A reusable piece of UI in React.' },
    { id: 3, question: 'What is state in React?', answer: 'An object that determines how a component renders and behaves.' },
];

// --- API ROUTES ---

// 4. Test route to verify server is working
app.get('/api/cards', (req, rest) => {
    rest.json(flashcardData);
});


app.listen(PORT, () => {
    console.log('server is running on http://localhost:' + PORT);
});