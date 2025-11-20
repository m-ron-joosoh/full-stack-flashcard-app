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

// Define the Schema (Flashcard structure)
const flashcardSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        requiered: true,
        trim: true
    },
    // Timestamps for createdAt and updatedAt
}, { timestamps: true });

// Create the Model
// The Model is what you use to interact with the database
const Flashcard = mongoose.model('Flashcard', flashcardSchema);

// --- API ROUTES ---

// 7. Update app.listen to only run if the DB connects
app.listen(PORT, () => {
    console.log('server is running on http://localhost:' + PORT);
});



// Route to fetch all flashcards (this is existing API endpoint)
app.get('/api/cards', async (req, res) => {
    try {
        // use the Mongoose Model to find All documents in the Flashcard collection
        const cards = await Flashcard.find({});
        res.json(cards);
    } catch (error) {
        // Handle any errors during the database query
        res.status(500).json({message: "Error fetching flashcards", error: error.message});
    }
});