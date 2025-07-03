import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="pookie-cat-animation">
          <div className="cat-body">
            <div className="cat-head">
              <div className="cat-ear cat-ear-left"></div>
              <div className="cat-ear cat-ear-right"></div>
              <div className="cat-face">
                <div className="cat-eye cat-eye-left"></div>
                <div className="cat-eye cat-eye-right"></div>
                <div className="cat-nose"></div>
                <div className="cat-mouth">
                  <div className="cat-mouth-left"></div>
                  <div className="cat-mouth-right"></div>
                </div>
              </div>
            </div>
            <div className="cat-body-main">
              <div className="cat-paws">
                <div className="cat-paw cat-paw-left"></div>
                <div className="cat-paw cat-paw-right"></div>
              </div>
            </div>
            <div className="cat-tail"></div>
          </div>
        </div>
        <div className="loading-text">
          <h2>Preparing something special for Piyusha... 🎉</h2>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="hearts-animation">
          <div className="heart heart-1">💕</div>
          <div className="heart heart-2">🌸</div>
          <div className="heart heart-3">✨</div>
          <div className="heart heart-4">🎂</div>
          <div className="heart heart-5">🐱</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;