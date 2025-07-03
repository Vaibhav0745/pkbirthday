import React, { useState } from 'react';
import MemoryGame from './games/MemoryGame';
import BalloonGame from './games/BalloonGame';
import WishGenerator from './games/WishGenerator';
import './GamesSection.css';

const GamesSection = ({ games }) => {
  const [activeGame, setActiveGame] = useState(null);

  const handleGameSelect = (gameType) => {
    setActiveGame(gameType);
  };

  const handleBackToMenu = () => {
    setActiveGame(null);
  };

  if (activeGame) {
    return (
      <div className="games-section">
        <div className="game-header">
          <button className="back-btn" onClick={handleBackToMenu}>
            ← Back to Games
          </button>
        </div>
        
        {activeGame === 'memory' && <MemoryGame />}
        {activeGame === 'balloon' && <BalloonGame />}
        {activeGame === 'wish' && <WishGenerator />}
      </div>
    );
  }

  return (
    <div className="games-section">
      <div className="games-header">
        <h2>🎮 Fun Games for Piyusha 🎮</h2>
        <p>Let's play some fun games to celebrate!</p>
      </div>

      <div className="games-menu">
        {games.map((game) => (
          <div 
            key={game.id}
            className="game-card"
            onClick={() => handleGameSelect(game.type)}
          >
            <div className="game-icon">
              {game.type === 'memory' && '🧠'}
              {game.type === 'balloon' && '🎈'}
              {game.type === 'wish' && '✨'}
            </div>
            
            <div className="game-info">
              <h3 className="game-title">{game.name}</h3>
              <p className="game-description">{game.description}</p>
            </div>
            
            <div className="game-pookie">
              <div className="pookie-cat">🐱</div>
              <div className="play-text">Click to Play!</div>
            </div>
          </div>
        ))}
      </div>

      <div className="games-footer">
        <div className="footer-message">
          <span className="footer-cat">😸</span>
          <span>Have fun playing, Piyusha!</span>
          <span className="footer-cat">😸</span>
        </div>
      </div>
    </div>
  );
};

export default GamesSection;