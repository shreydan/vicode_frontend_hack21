import React, { useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import './App.css'



// DESKTOP
import Landing from './Components/Landing-Desktop/Landing'
import TitleBar from './Components/TitleBar/TitleBar';
import Feature from './Components/Features-Desktop/Feature'
import OS from './Components/OS-feature/OS'
import Colors from './Components/Colors-Desktop/Colors'
import WatchExperience from './Components/Watch3D/WatchExperience'
import Purchase from './Components/Purchase/Purchase';
import Footer from './Components/Footer/Footer';
import feature1 from './assets/SETU.png'
import feature2 from './assets/nfc.png'
import feature3 from './assets/f2.png'
import feature4 from './assets/ring.png'
import feature5 from './assets/chakra.png'





// MOBILE
import MLanding from './Components/Landing-Mobile/MLanding'
import FeatureMobile from './Components/Feature-mobile/Feature_mobile'
import feature1_mobile from './assets/mobile/setu.png'
import feature2_mobile from './assets/mobile/nfc.png'
import feature3_mobile from './assets/mobile/vitals.png'


function App() {

  const [features] = useState([
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

  const [featuresMobile] = useState([
    {
      id: 1,
      title: 'Aarogya Setu Integration',
      description: 'get quick contact tracing notifications directly on your watch and get reminders and directions for your vaccine appointments',
      image: feature1_mobile,
      color: 'white',
      bg: '#FF6262'
    }, 
    {
      id: 2,
      title: 'NFC payments with UPI and Crypto',
      description: 'Pay using UPI anywhere quickly and pay using your selected cryptocurrency connected to your digital wallet for seamless transactions.',
      image: feature2_mobile,
      color: 'white',
      bg: '#62A1FF'
    },
    {
      id: 3,
      title: 'Active vital measurements with AI',
      description: 'Thanks to its precise sensors which use specalised AI algorithms to keep all your Health Vitals in check.',
      image: feature3_mobile,
      color: 'black',
      bg: '#62FF8E'
    },
    // {
    //   id: 4,
    //   title: 'Hi-Tech precision with advanced sensors',
    //   description: 'This is the first watch ever to measure temperature using IR and an oximeter to accurately measure your vitals round the clock.',
    //   image: feature4,
    //   color: 'white',
    //   bg: '#0F0F0F'
    // },
    // {
    //   id: 5,
    //   title: 'Digital Chakra to interact effortlessly',
    //   description: 'Kawatch emulates the mechanics of a real time-piece digitally to make new users feel home.',
    //   image: feature5,
    //   color: 'white',
    //   bg: '#EE6E26'
    // },
  ])
  
const Desktop = ({children}) => {
  const isDesktop = useMediaQuery({orientation: 'landscape'})
  return isDesktop ? children : null
}
const Mobile = ({children}) => {
  const isMobile = useMediaQuery({orientation: 'portrait'})
  return isMobile ? children : null
}



  return (
    <div className="App">
        <Desktop>
          <Landing />
          <TitleBar color='#cab5eb' text='Features' name="to-features"/>
          {
            features.map((feature) => (
              <Feature {...feature} key={feature.id} />
            ))
          }
          <OS />
          <Colors />
          <TitleBar color='#FCD5F8' text='3D Experience' name="to-experience" />
          <WatchExperience />
          <TitleBar color='#43A6DE' text='Purchase'  name="to-purchase"/>
          <Purchase />
          <Footer />
      </Desktop>

      <Mobile>
        <MLanding />
        <FeatureMobile {...featuresMobile[0]}/>
      </Mobile>

    </div>
  );
}

export default App;
