import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import WishesSection from './WishesSection';
import GamesSection from './GamesSection';
import BackgroundMusic from './BackgroundMusic';
import './HomePage.css';

const HomePage = ({ wishData }) => {
  const [currentSection, setCurrentSection] = useState('home');
  const [showApology, setShowApology] = useState(false);

  useEffect(() => {
    // Show apology after 3 seconds
    const timer = setTimeout(() => {
      setShowApology(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="homepage">
      <BackgroundMusic />
      
      {/* Floating pookie cats */}
      <div className="floating-cats">
        <div className="floating-cat cat-1">🐱</div>
        <div className="floating-cat cat-2">😸</div>
        <div className="floating-cat cat-3">😻</div>
        <div className="floating-cat cat-4">🐾</div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <button 
          className={`nav-btn ${currentSection === 'home' ? 'active' : ''}`}
          onClick={() => handleSectionChange('home')}
        >
          🏠 Home
        </button>
        <button 
          className={`nav-btn ${currentSection === 'wishes' ? 'active' : ''}`}
          onClick={() => handleSectionChange('wishes')}
        >
          💝 Wishes
        </button>
        <button 
          className={`nav-btn ${currentSection === 'games' ? 'active' : ''}`}
          onClick={() => handleSectionChange('games')}
        >
          🎮 Games
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {currentSection === 'home' && (
          <div className="home-section">
            <div className="hero-section">
              <h1 className="birthday-title">
                Happy Birthday, <span className="name-highlight">Piyusha</span>! 🎉
              </h1>
              <div className="subtitle">
                Today is all about celebrating you! 🌸
              </div>
              
              <CountdownTimer targetDate={wishData.birthday.date} />
              
              <div className="birthday-message">
                <div className="pookie-cat-large">
                  <div className="cat-emoji">😸</div>
                  <div className="cat-hearts">💕✨💕</div>
                </div>
                <p className="main-message">
                  May your special day be filled with joy, laughter, and all the happiness you deserve! 
                  You bring so much light into this world, and today we celebrate the wonderful person you are! 🎂
                </p>
              </div>

              {showApology && (
                <div className="apology-section">
                  <div className="apology-card">
                    <div className="apology-icon">🌸</div>
                    <p className="apology-text">
                      {wishData.birthday.apologyMessage}
                    </p>
                    <div className="apology-footer">
                      <span>With love and best wishes 💕</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {currentSection === 'wishes' && (
          <WishesSection wishes={wishData.birthday.wishes} pookieQuotes={wishData.pookieQuotes} />
        )}

        {currentSection === 'games' && (
          <GamesSection games={wishData.birthday.games} />
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="pookie-cats-footer">
            <span>🐱</span>
            <span>Made with 💕 for Piyusha</span>
            <span>🐱</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;