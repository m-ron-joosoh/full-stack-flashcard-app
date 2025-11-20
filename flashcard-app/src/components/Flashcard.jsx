import React, { useState } from "react";

// src/components/Flashcard.jsx
// Flashcard.jsx (With Destructuring)
function Flashcard({card, onAdvance}) { //<--- Destructuring the 'card' prop from the props object
    // 2. Initialize state to track if the answer is shown
    // [variable, setterFunction] = useState(initialValue)
    const [ isFlipped, setIsFlipped ] = useState(false);

    // 3. Event handler to toggle the answer visibility
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    // 4. functio to handle advancing the card and resetting the flip state
    const handleNext = () => {
        setIsFlipped(false);// reset the the card to the question side.
        onAdvance(); // call the function passed down from the  App component
    };
    return (
        <div className="flashcard-container">
            {/* conditional rendering based on isFlipped state */}
            <div className="card-content">
                <h2>
                    {isFlipped
                        ? card.answer // Show answer if isFlipped is true
                        : card.question // show question if isFlipped is false
                    }
                </h2>
            </div>
            
            <button className="show-answer-btn" onClick={handleFlip}>
            {/* we use {} to switch to JS mode to display the text conditionally */}
            {isFlipped ? "Show Question" : "Show Answer"}
            </button>
            {/* New button to trigger parent's function */}
            <button className="next-button" onClick={handleNext}>
                Next Card
            </button>
        </div>
    );
}

//3. export the component to use it in other files
export default Flashcard;