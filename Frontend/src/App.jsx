import React from 'react'
import FacialExpression from './components/FacialExpression'
import MoodSongs from './components/MoodSongs'
import { useState } from 'react';

const App = () => {
  const [songs, setSongs] = useState([
   
  ]);
  return (
    <div>
      <FacialExpression setSongs={setSongs}/>
      <MoodSongs songs={songs}/>
    </div>
  )
}

export default App
