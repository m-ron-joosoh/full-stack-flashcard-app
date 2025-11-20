// server.js

// 1. Import the Express framework
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// 2. Define your connections string (replace with your own if needed)
const DB_URL = 'mongodb+srv://shinhayate40_db_user:rx78Gunduz@cluster0.s0cnnib.mongodb.net/flashcardDB?retryWrites=true&w=majority'
// name the database flascardDB

// 3. Initialize the application
const app = express();
const PORT = 5000;// Use different port than React app

// 4. Middleware to handle CORS
app.use(cors());

// 5. Add built-in middleware to parse JSON request bodies
app.use(express.json()); 

// 6. Connect to MongoDB using Mongoose
mongoose.connect(DB_URL)
    .then(() => console.log('MongoDB connection established succesfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// --- API ROUTES ---

// 7. Update app.listen to only run if the DB connects
app.listen(PORT, () => {
    console.log('server is running on http://localhost:' + PORT);
});

// 8. Define a simple route to test the server
app.get('/', (req, res) => {
    res.send('Flashccard API is running fine. no worries. harika!')
});

// Route to fetch all flashcards (this is existing API endpoint)
app.get('/api/cards', (req, res) => {
    // For demonstration, sending a static array of flashcards
    // In a real application, you would fetch this data from MongoDB
    res.json([]);
});