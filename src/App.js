import React, { useState } from 'react'
import './App.css'
import Landing from './Components/Landing-Desktop/Landing'
import TitleBar from './Components/TitleBar/TitleBar';

function App() {
  return (
    <div className="App">
      <Landing />
      <TitleBar color='#cab5eb' text='Features' />
    </div>
  );
}

export default App;
