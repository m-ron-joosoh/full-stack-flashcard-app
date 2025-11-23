// src/app.jsx

//  import your component
import Header from './components/Header';
import Flashcard from './components/Flashcard';
import NewCardForm from './components/NewCardForm';
import { useState, useEffect } from 'react';

function App() {
  // 2. State to hold flashcard data fetched from API
  const [flashcardData, setFlashcardData] = useState([]);

  // 3. New state to track loading status;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

 

  // 4. useEffect Hook to Fetch flashcard data from API when component mounts
  useEffect(() => {
    // use an async function to fetch data
    const fetchFlashcardData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cards");
        const data = await response.json();

        // update the deck state with data from the server
        setFlashcardData(data);
        setIsLoading(false); // Set loading to false after data is fetched
      }
      catch (error) {
        console.error("Failed to fetch flashcard:", error);
        setIsLoading(false); // Even on error, stop loading
      }
    };

    fetchFlashcardData();
  }, []); // empty dependency array means this runs once on mount
   
    // function to handle new card creation
    const handleCardCreated = (newCard) => {
      setFlashcardData(prevDeck => [...prevDeck, newCard]);
      setCurrentIndex(flashcardData.length); // move to the newly added card
    }

  //  The function to go to the next card
  const handleNextCard = () => {
    // only advance if the data is not empty
    if (flashcardData.length > 0) {
      setCurrentIndex((currentIndex + 1) % flashcardData.length);
    }
  };



  // n. Get the card data based on the current index
  const currentCard = flashcardData[currentIndex];

  return (
    <div className="app-container">
      <h1>Flashcard Reviewer</h1>

      {/* INTEGRATE THE NEW FORM HERE */}
      <NewCardForm onCardCreated={handleCardCreated} />

      <hr />

      <Header />
      <div className="card-list-container">
        {/* Display loading message or the card */}
        {isLoading ? (
          <h2>Loading flashcards from server ....</h2>
        ) : flashcardData.length === 0 ? (
          <h2>No cards is available. Please add cards</h2>
        ) : (
          <Flashcard
            card={currentCard}
            onAdvance={handleNextCard}
            />
        )};

        
      </div>
    </div>
  );
}
// just adding comment to trouble shoot git issue
export default App;