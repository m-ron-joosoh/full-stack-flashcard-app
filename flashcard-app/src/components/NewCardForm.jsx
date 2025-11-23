// flashcard-app/src/NewCardFom.jsx

import React, {useState} from 'react';

// will need this to tell the server what kind of of request we are sending
const API_URL = 'http://localhost:5000/api/cards';

const NewCardForm = ({ onCardCreated }) => {
    // State to hold the user's input for the new card
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // prepare the data payload
        const newCardData = {question, answer};
        
        try {
            // The fetch call: sending a POST request with JSON data
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json', // CRITICAL: Tells the server the data format
                },
                body: JSON.stringify(newCardData), // CRITICAL: convert JS object to JSON string
            });
            

            if (!response.ok) {
                throw new Error('failed to create new flashcard on server');
            }

            const createdCard = await response.json();

            // Clear the form and notify the parent component (App.jsx)
            setQuestion('');
            setAnswer('');
            
            // This function will be passed down from App.jsx to update the list instantly
            onCardCreated(createdCard);

        } catch (err) {
            console.error('Submission error:',err);
            setError('Could not save card. please check your network and server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="new-card-form">
            <h3>Create New Flashcard</h3>

            <div className="form-group">
                <label htmlFor="question">Question:</label>
                <textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="answer">Answer:</label>
                <textarea
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                />
            </div>

            <button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Card'}
            </button>

            {error && <p className="error-message">{error}</p>}{/* Display error message if error State is not null */}
        </form>
    )
};

export default NewCardForm;