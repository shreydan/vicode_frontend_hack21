import React, { useState } from 'react'
import './App.css'
import Landing from './Components/Landing-Desktop/Landing'
import TitleBar from './Components/TitleBar/TitleBar';
import Feature from './Components/Features-Desktop/Feature'

import feature1 from './assets/SETU.png'
import feature2 from './assets/nfc.png'
import feature3 from './assets/f2.png'
import feature4 from './assets/ring.png'
import feature5 from './assets/chakra.png'


function App() {

  const [features, setFeatures] = useState([
    {
      id: 1,
      title: 'Aarogya Setu Integration',
      description: 'get quick contact tracing notifications directly on your watch and get reminders and directions for your vaccine appointments',
      flex: 'row',
      image: feature1,
      color: 'white',
      bg: '#FF6262',
      align: 'right'
    }, 
    {
      id: 2,
      title: 'NFC payments with UPI and Crypto',
      description: 'Pay using UPI anywhere quickly and pay using your selected cryptocurrency connected to your digital wallet for seamless transactions.',
      flex: 'row-reverse',
      image: feature2,
      color: 'white',
      bg: '#62A1FF',
      align: 'left'
    },
    {
      id: 3,
      title: 'Active vital measurements with AI',
      description: 'Thanks to its precise sensors which use specalised AI algorithms to keep all your Health Vitals in check.',
      flex: 'row',
      image: feature3,
      color: 'black',
      bg: '#62FF8E',
      align: 'right'
    },
    {
      id: 4,
      title: 'Hi-Tech precision with advanced sensors',
      description: 'This is the first watch ever to measure temperature using IR and an oximeter to accurately measure your vitals round the clock.',
      flex: 'row-reverse',
      image: feature4,
      color: 'white',
      bg: '#0F0F0F',
      align: 'left'
    },
    {
      id: 5,
      title: 'Digital Chakra to interact effortlessly',
      description: 'Kawatch emulates the mechanics of a real time-piece digitally to make new users feel home.',
      flex: 'row',
      image: feature5,
      color: 'white',
      bg: '#EE6E26',
      align: 'right'
    },
  ])






  return (
    <div className="App">
      <Landing />
      <TitleBar color='#cab5eb' text='Features' />
      
    </div>
  );
}

export default App;
