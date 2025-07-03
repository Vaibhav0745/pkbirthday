import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsToday(false);
      } else {
        // Check if it's today
        const today = new Date();
        const birthday = new Date(targetDate);
        
        if (today.toDateString() === birthday.toDateString()) {
          setIsToday(true);
        }
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isToday) {
    return (
      <div className="countdown-container">
        <div className="birthday-celebration">
          <div className="celebration-text">
            🎉 IT'S YOUR BIRTHDAY! 🎉
          </div>
          <div className="celebration-subtext">
            Hope you're having the most amazing day! 🎂✨
          </div>
          <div className="celebration-cats">
            <span className="dancing-cat">🐱</span>
            <span className="dancing-cat">😸</span>
            <span className="dancing-cat">😻</span>
            <span className="dancing-cat">🎉</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="countdown-container">
      <div className="countdown-title">
        <h2>🎂 Birthday Countdown 🎂</h2>
        <p>Until Piyusha's special day!</p>
      </div>
      
      <div className="countdown-timer">
        <div className="time-unit">
          <div className="time-number">{timeLeft.days}</div>
          <div className="time-label">Days</div>
          <div className="time-emoji">📅</div>
        </div>
        
        <div className="time-separator">:</div>
        
        <div className="time-unit">
          <div className="time-number">{timeLeft.hours}</div>
          <div className="time-label">Hours</div>
          <div className="time-emoji">⏰</div>
        </div>
        
        <div className="time-separator">:</div>
        
        <div className="time-unit">
          <div className="time-number">{timeLeft.minutes}</div>
          <div className="time-label">Minutes</div>
          <div className="time-emoji">⏱️</div>
        </div>
        
        <div className="time-separator">:</div>
        
        <div className="time-unit">
          <div className="time-number">{timeLeft.seconds}</div>
          <div className="time-label">Seconds</div>
          <div className="time-emoji">⚡</div>
        </div>
      </div>
      
      <div className="countdown-message">
        <div className="pookie-countdown">
          <span className="pookie-cat">🐱</span>
          <span className="countdown-text">Almost time for the celebration!</span>
          <span className="pookie-cat">🐱</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;