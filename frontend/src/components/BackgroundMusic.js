import React, { useState, useEffect, useRef } from 'react';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Mock audio data - in real implementation, you would use actual audio files
  const musicTracks = [
    { name: "Happy Birthday Melody", duration: "2:30" },
    { name: "Pookie Cat Theme", duration: "3:15" },
    { name: "Birthday Celebration", duration: "2:45" }
  ];

  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    // Auto-play after user interaction
    const handleUserInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        // In real implementation, you would start playing audio here
        // For now, we'll just show the music controls
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [hasInteracted]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In real implementation, you would control actual audio playback here
    console.log(isPlaying ? 'Pausing music' : 'Playing music');
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % musicTracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + musicTracks.length) % musicTracks.length);
  };

  if (!hasInteracted) {
    return (
      <div className="music-notice">
        <div className="music-icon">🎵</div>
        <div className="music-text">Click anywhere to enable birthday music!</div>
      </div>
    );
  }

  return (
    <div className="background-music">
      <div className="music-player">
        <div className="music-controls">
          <button className="control-btn" onClick={prevTrack}>
            ⏮️
          </button>
          <button className="play-pause-btn" onClick={togglePlayPause}>
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button className="control-btn" onClick={nextTrack}>
            ⏭️
          </button>
        </div>
        
        <div className="music-info">
          <div className="track-name">{musicTracks[currentTrack].name}</div>
          <div className="track-duration">{musicTracks[currentTrack].duration}</div>
        </div>
        
        <div className="music-visualizer">
          <div className={`visualizer-bar ${isPlaying ? 'playing' : ''}`}></div>
          <div className={`visualizer-bar ${isPlaying ? 'playing' : ''}`}></div>
          <div className={`visualizer-bar ${isPlaying ? 'playing' : ''}`}></div>
          <div className={`visualizer-bar ${isPlaying ? 'playing' : ''}`}></div>
          <div className={`visualizer-bar ${isPlaying ? 'playing' : ''}`}></div>
        </div>
      </div>

      <div className="music-toggle">
        <button className="music-toggle-btn" onClick={togglePlayPause}>
          <div className="toggle-icon">
            {isPlaying ? '🔊' : '🔇'}
          </div>
          <div className="toggle-text">
            {isPlaying ? 'Playing' : 'Paused'}
          </div>
        </button>
      </div>

      {/* Mock audio element for future implementation */}
      <audio 
        ref={audioRef}
        loop
        style={{ display: 'none' }}
      >
        {/* In real implementation, you would add audio sources here */}
        <source src="/birthday-music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default BackgroundMusic;