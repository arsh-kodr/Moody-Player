import React, { useState } from 'react';
import FacialExpression from './components/FacialExpression';
import MoodSongs from './components/MoodSongs';
import './App.css';  // new CSS file

const App = () => {
  const [songs, setSongs] = useState([]);

  return (
    <div className="app">
      <div className="mood-layout">
        <FacialExpression setSongs={setSongs} />
        <MoodSongs songs={songs} />
      </div>
    </div>
  );
};

export default App;
