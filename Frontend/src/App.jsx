import React, { useState } from 'react'
import FacialExpression from './components/FacialExpression'
import MoodSongs from './components/MoodSongs'
import './App.css'

const App = () => {
  const [songs, setSongs] = useState([]);

  return (
    <div className="app">
      <div className="section">
        <FacialExpression setSongs={setSongs} />
      </div>
      <div className="section">
        <MoodSongs songs={songs} />
      </div>
    </div>
  )
}

export default App
