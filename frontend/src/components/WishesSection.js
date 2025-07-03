import React, { useState } from 'react';
import './WishesSection.css';

const WishesSection = ({ wishes, pookieQuotes }) => {
  const [currentWish, setCurrentWish] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextWish = () => {
    setCurrentWish((prev) => (prev + 1) % wishes.length);
  };

  const prevWish = () => {
    setCurrentWish((prev) => (prev - 1 + wishes.length) % wishes.length);
  };

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * pookieQuotes.length);
    setCurrentQuote(randomIndex);
  };

  return (
    <div className="wishes-section">
      <div className="wishes-header">
        <h2>💝 Special Birthday Wishes 💝</h2>
        <p>Sweet messages just for you, Piyusha!</p>
      </div>

      <div className="wishes-container">
        <div className="wish-card">
          <div className="wish-decoration">
            <div className="pookie-cat-wish">🐱</div>
            <div className="wish-hearts">💕 ✨ 💕</div>
          </div>
          
          <div className="wish-content">
            <p className="wish-text">{wishes[currentWish]}</p>
          </div>
          
          <div className="wish-navigation">
            <button className="wish-nav-btn" onClick={prevWish}>
              ← Previous
            </button>
            <div className="wish-counter">
              {currentWish + 1} of {wishes.length}
            </div>
            <button className="wish-nav-btn" onClick={nextWish}>
              Next →
            </button>
          </div>
        </div>

        <div className="pookie-quotes-section">
          <div className="quote-header">
            <h3>🐾 Pookie Cat Says 🐾</h3>
          </div>
          
          <div className="quote-card">
            <div className="quote-cat">😸</div>
            <p className="quote-text">{pookieQuotes[currentQuote]}</p>
            <button className="quote-btn" onClick={generateRandomQuote}>
              Get New Quote! 🎲
            </button>
          </div>
        </div>

        <div className="wishes-gallery">
          <div className="gallery-header">
            <h3>🌸 All Wishes 🌸</h3>
          </div>
          
          <div className="wishes-grid">
            {wishes.map((wish, index) => (
              <div 
                key={index} 
                className={`wish-bubble ${index === currentWish ? 'active' : ''}`}
                onClick={() => setCurrentWish(index)}
              >
                <div className="bubble-cat">🐱</div>
                <p className="bubble-text">{wish.substring(0, 50)}...</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishesSection;