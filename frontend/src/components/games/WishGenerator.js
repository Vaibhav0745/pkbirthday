import React, { useState } from 'react';
import './WishGenerator.css';

const WishGenerator = () => {
  const [currentWish, setCurrentWish] = useState('');
  const [wishHistory, setWishHistory] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const wishTemplates = [
    {
      template: "May your {adjective} birthday be filled with {noun1} and {noun2}! 🎉",
      adjectives: ["amazing", "wonderful", "fantastic", "spectacular", "magical", "beautiful", "incredible", "joyful"],
      noun1: ["happiness", "laughter", "joy", "love", "smiles", "blessings", "dreams", "memories"],
      noun2: ["cake", "surprises", "adventures", "friends", "family", "celebration", "magic", "wonder"]
    },
    {
      template: "Wishing you a birthday as {adjective} as you are, filled with {noun1} and {noun2}! 🌟",
      adjectives: ["sweet", "amazing", "wonderful", "special", "beautiful", "lovely", "incredible", "fantastic"],
      noun1: ["love", "joy", "happiness", "laughter", "peace", "warmth", "kindness", "light"],
      noun2: ["good times", "great friends", "beautiful moments", "sweet memories", "happy surprises", "wonderful adventures"]
    },
    {
      template: "Hope your special day brings you {noun1}, {noun2}, and all the {adjective} things life has to offer! 🎂",
      adjectives: ["beautiful", "wonderful", "amazing", "sweet", "magical", "incredible", "joyful", "special"],
      noun1: ["happiness", "love", "joy", "peace", "laughter", "smiles", "blessings", "dreams"],
      noun2: ["success", "health", "friendship", "adventure", "prosperity", "fulfillment", "contentment", "excitement"]
    },
    {
      template: "May this birthday be the start of a {adjective} year filled with {noun1} and {noun2}! ✨",
      adjectives: ["wonderful", "amazing", "fantastic", "magical", "beautiful", "incredible", "spectacular", "blessed"],
      noun1: ["new adventures", "great opportunities", "beautiful moments", "happy memories", "exciting discoveries", "wonderful experiences"],
      noun2: ["love", "laughter", "success", "happiness", "joy", "prosperity", "fulfillment", "peace"]
    }
  ];

  const pookieMessages = [
    "🐱 Meow-velous birthday wishes from your pookie cat! 🐾",
    "🎀 You're purr-fect, Piyusha! Happy Birthday! 🐱",
    "😸 Pookie cats think you're the cat's pajamas! 🎉",
    "🐾 Sending you kitty kisses and birthday wishes! 💕",
    "🐱 Hope your birthday is as sweet as a pookie cat! 🎂",
    "💕 You're as adorable as a pookie cat in a bow! 🎀",
    "🌸 Pookie cats are celebrating your special day! 🎊",
    "✨ May your birthday sparkle like a pookie cat's eyes! 🐱"
  ];

  const generateWish = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const randomTemplate = wishTemplates[Math.floor(Math.random() * wishTemplates.length)];
      const randomAdjective = randomTemplate.adjectives[Math.floor(Math.random() * randomTemplate.adjectives.length)];
      const randomNoun1 = randomTemplate.noun1[Math.floor(Math.random() * randomTemplate.noun1.length)];
      const randomNoun2 = randomTemplate.noun2[Math.floor(Math.random() * randomTemplate.noun2.length)];
      
      const wish = randomTemplate.template
        .replace('{adjective}', randomAdjective)
        .replace('{noun1}', randomNoun1)
        .replace('{noun2}', randomNoun2);
      
      setCurrentWish(wish);
      setWishHistory(prev => [wish, ...prev.slice(0, 4)]);
      setIsGenerating(false);
    }, 1500);
  };

  const generatePookieWish = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const randomPookieMessage = pookieMessages[Math.floor(Math.random() * pookieMessages.length)];
      setCurrentWish(randomPookieMessage);
      setWishHistory(prev => [randomPookieMessage, ...prev.slice(0, 4)]);
      setIsGenerating(false);
    }, 1500);
  };

  const shareWish = () => {
    if (currentWish) {
      navigator.clipboard.writeText(currentWish);
      alert('Birthday wish copied to clipboard! 📋');
    }
  };

  return (
    <div className="wish-generator">
      <div className="generator-header">
        <h2>✨ Magical Birthday Wish Generator ✨</h2>
        <p>Create special birthday wishes for Piyusha!</p>
      </div>

      <div className="wish-display">
        {isGenerating ? (
          <div className="generating-animation">
            <div className="magic-wand">🪄</div>
            <div className="generating-text">Generating magical wish...</div>
            <div className="sparkles">
              <span className="sparkle">✨</span>
              <span className="sparkle">⭐</span>
              <span className="sparkle">🌟</span>
              <span className="sparkle">💫</span>
            </div>
          </div>
        ) : (
          <div className="wish-card">
            {currentWish ? (
              <>
                <div className="wish-decoration">
                  <div className="wish-icon">🎁</div>
                  <div className="wish-hearts">💕 ✨ 💕</div>
                </div>
                <div className="wish-text">{currentWish}</div>
                <div className="wish-footer">
                  <div className="pookie-signature">
                    <span className="pookie-cat">🐱</span>
                    <span className="signature-text">With love</span>
                    <span className="pookie-cat">🐱</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="empty-wish">
                <div className="empty-icon">🎪</div>
                <div className="empty-text">Click a button below to generate a magical birthday wish!</div>
                <div className="empty-cats">
                  <span>🐱</span>
                  <span>😸</span>
                  <span>🎀</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="generator-controls">
        <button 
          className="generate-btn standard-wish"
          onClick={generateWish}
          disabled={isGenerating}
        >
          🎉 Generate Birthday Wish
        </button>
        <button 
          className="generate-btn pookie-wish"
          onClick={generatePookieWish}
          disabled={isGenerating}
        >
          🐱 Generate Pookie Wish
        </button>
        {currentWish && (
          <button 
            className="share-btn"
            onClick={shareWish}
          >
            📋 Copy Wish
          </button>
        )}
      </div>

      {wishHistory.length > 0 && (
        <div className="wish-history">
          <h3>🌟 Previous Wishes</h3>
          <div className="history-list">
            {wishHistory.map((wish, index) => (
              <div key={index} className="history-item">
                <div className="history-number">{index + 1}</div>
                <div className="history-text">{wish}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="generator-footer">
        <div className="footer-message">
          <span className="footer-cat">😸</span>
          <span>Every wish is made with love for Piyusha!</span>
          <span className="footer-cat">😸</span>
        </div>
      </div>
    </div>
  );
};

export default WishGenerator;