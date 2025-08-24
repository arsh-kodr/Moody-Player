import { useState, useRef } from "react";
import "./MoodSongs.css";

const MoodSongs = ({ songs }) => {
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRef = useRef(null);

  const handlePlayPause = (index, audioSrc) => {
    if (isPlaying === index) {
      audioRef.current.pause();
      setIsPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
      setIsPlaying(index);

      audioRef.current.onended = () => setIsPlaying(null);
    }
  };

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      {songs.map((song, index) => (
        <div className="song fade-in" key={index}>
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>

          <div className="play-pause-button">
            <button onClick={() => handlePlayPause(index, song.audio)}>
              {isPlaying === index ? (
                <i className="ri-pause-circle-fill active-icon"></i>
              ) : (
                <i className="ri-play-circle-fill pulse"></i>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
