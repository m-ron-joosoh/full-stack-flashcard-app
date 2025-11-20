// src/components/Header.jsx
function Header() {
    return (
        <header className="app-header">
            <h1>Spaced Repetition Flashcard</h1>
            <nav>
                <a href="/">Study</a> | <a href="/decks">Decks</a>
            </nav>
        </header>
    );
}

export default Header;