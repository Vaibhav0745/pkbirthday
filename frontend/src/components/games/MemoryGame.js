import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const pookieEmojis = ['🐱', '😸', '😻', '🐾', '🎀', '💕', '🌸', '✨'];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const shuffledCards = [...pookieEmojis, ...pookieEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false
      }));
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setMoves(0);
    setGameComplete(false);
  };

  const flipCard = (cardId) => {
    if (flippedCards.length === 2 || flippedCards.includes(cardId) || matchedCards.includes(cardId)) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const card1 = cards.find(card => card.id === newFlippedCards[0]);
      const card2 = cards.find(card => card.id === newFlippedCards[1]);

      if (card1.emoji === card2.emoji) {
        // Match found
        setTimeout(() => {
          setMatchedCards([...matchedCards, ...newFlippedCards]);
          setFlippedCards([]);
          setScore(score + 10);
          
          if (matchedCards.length + 2 === cards.length) {
            setGameComplete(true);
          }
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    initializeGame();
  };

  return (
    <div className="memory-game">
      <div className="game-header">
        <h2>🧠 Pookie Cat Memory Game 🐱</h2>
        <div className="game-stats">
          <div className="stat">
            <span className="stat-label">Score:</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Moves:</span>
            <span className="stat-value">{moves}</span>
          </div>
        </div>
      </div>

      {gameComplete && (
        <div className="game-complete">
          <div className="complete-message">
            <h3>🎉 Congratulations, Piyusha! 🎉</h3>
            <p>You completed the memory game!</p>
            <p>Score: {score} | Moves: {moves}</p>
            <div className="celebration-cats">
              <span>🐱</span>
              <span>😸</span>
              <span>😻</span>
              <span>🎀</span>
            </div>
          </div>
        </div>
      )}

      <div className="memory-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`memory-card ${
              flippedCards.includes(card.id) || matchedCards.includes(card.id)
                ? 'flipped'
                : ''
            } ${matchedCards.includes(card.id) ? 'matched' : ''}`}
            onClick={() => flipCard(card.id)}
          >
            <div className="card-front">
              <div className="card-pattern">🎀</div>
            </div>
            <div className="card-back">
              <div className="card-emoji">{card.emoji}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="game-controls">
        <button className="reset-btn" onClick={resetGame}>
          🔄 New Game
        </button>
      </div>
    </div>
  );
};

export default MemoryGame;