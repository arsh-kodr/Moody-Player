import React, { useState } from "react";
import "./MoodSongs.css";

const MoodSongs = () => {
  const [songs, setSongs] = useState([
    {
      title: "test_title",
      artist: "test_artist",
      url: "test_url",
    },
    {
      title: "test_title2",
      artist: "test_artist2",
      url: "test_url2",
    },
    {
      title: "test_title",
      artist: "test_artist",
      url: "test_url",
    },
  ]);
  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      {songs.map((song, index) => (
        <div className="song" key={index}>
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>

          <div className="play-pause-button">
            <i class="ri-pause-line"></i>
            <i class="ri-play-circle-fill"></i>

          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
