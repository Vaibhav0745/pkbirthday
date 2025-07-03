import React, { useState, useEffect } from 'react';
import './BalloonGame.css';

const BalloonGame = () => {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameTime, setGameTime] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [surprises, setSurprises] = useState([]);

  const balloonColors = ['🎈', '🎀', '💕', '🌸', '✨', '🐱', '😸', '🎂'];
  const birthdayMessages = [
    "Happy Birthday Piyusha! 🎉",
    "You're amazing! 🌟",
    "Hope your day is wonderful! 💕",
    "Sending birthday hugs! 🤗",
    "Make a wish! ✨",
    "Party time! 🎊",
    "Sweet like cake! 🎂",
    "Pookie cats love you! 🐱"
  ];

  useEffect(() => {
    let interval;
    if (gameStarted && !gameOver) {
      interval = setInterval(() => {
        setGameTime(prevTime => {
          if (prevTime <= 1) {
            setGameOver(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    let interval;
    if (gameStarted && !gameOver) {
      interval = setInterval(() => {
        createBalloon();
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameOver]);

  const createBalloon = () => {
    const newBalloon = {
      id: Date.now() + Math.random(),
      emoji: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      left: Math.random() * 80 + 10,
      bottom: 0,
      message: birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)]
    };
    
    setBalloons(prev => [...prev, newBalloon]);
    
    // Remove balloon after animation
    setTimeout(() => {
      setBalloons(prev => prev.filter(balloon => balloon.id !== newBalloon.id));
    }, 8000);
  };

  const popBalloon = (balloonId, message) => {
    setBalloons(prev => prev.filter(balloon => balloon.id !== balloonId));
    setScore(prev => prev + 10);
    
    // Show surprise message
    const newSurprise = {
      id: Date.now(),
      message,
      show: true
    };
    setSurprises(prev => [...prev, newSurprise]);
    
    // Remove surprise after 2 seconds
    setTimeout(() => {
      setSurprises(prev => prev.filter(surprise => surprise.id !== newSurprise.id));
    }, 2000);
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setGameTime(30);
    setBalloons([]);
    setSurprises([]);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setGameTime(30);
    setBalloons([]);
    setSurprises([]);
  };

  return (
    <div className="balloon-game">
      <div className="game-header">
        <h2>🎈 Birthday Balloon Pop 🎉</h2>
        <div className="game-info">
          <div className="score">Score: {score}</div>
          <div className="timer">Time: {gameTime}s</div>
        </div>
      </div>

      {!gameStarted && !gameOver && (
        <div className="game-start">
          <div className="start-message">
            <h3>🎊 Pop the balloons to reveal birthday surprises! 🎊</h3>
            <p>Click on the floating balloons before they disappear!</p>
            <div className="start-decoration">
              <span className="decoration-balloon">🎈</span>
              <span className="decoration-cat">🐱</span>
              <span className="decoration-balloon">🎀</span>
            </div>
          </div>
          <button className="start-btn" onClick={startGame}>
            Start Game! 🎮
          </button>
        </div>
      )}

      {gameOver && (
        <div className="game-over">
          <div className="game-over-content">
            <h3>🎉 Game Over! 🎉</h3>
            <p>Great job, Piyusha!</p>
            <div className="final-score">Final Score: {score}</div>
            <div className="celebration-message">
              {score >= 100 ? "Amazing! You're a balloon popping champion! 🏆" :
               score >= 50 ? "Well done! You popped so many balloons! 🎊" :
               "Good effort! Keep practicing! 💪"}
            </div>
            <div className="celebration-cats">
              <span>🐱</span>
              <span>😸</span>
              <span>🎈</span>
              <span>🎀</span>
            </div>
            <button className="play-again-btn" onClick={resetGame}>
              Play Again! 🔄
            </button>
          </div>
        </div>
      )}

      <div className="game-area">
        {balloons.map(balloon => (
          <div
            key={balloon.id}
            className="balloon"
            style={{ left: `${balloon.left}%` }}
            onClick={() => popBalloon(balloon.id, balloon.message)}
          >
            <div className="balloon-emoji">{balloon.emoji}</div>
            <div className="balloon-string"></div>
          </div>
        ))}
        
        {surprises.map(surprise => (
          <div
            key={surprise.id}
            className="surprise-message"
          >
            {surprise.message}
          </div>
        ))}
      </div>

      <div className="game-instructions">
        <p>💡 Tip: Click on the floating balloons to pop them and reveal birthday messages!</p>
      </div>
    </div>
  );
};

export default BalloonGame;