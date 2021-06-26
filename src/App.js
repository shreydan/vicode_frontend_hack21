import React, { useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import {Carousel} from 'react-responsive-carousel'
import './App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Language from './Components/Language/Language';


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
import ColorsMobile from './Components/Colors-Mobile/ColorsMobile';
import Specifications from './Components/Specifications/Specifications';
import ToTop from './Components/ToTop/ToTop';


function App() {

  const [hindiToggle, setHindi] = useState(0)

  const changeLanguageToHindi = () => {
    console.log('yay')
    if(hindiToggle === 1) setHindi(0)
    else setHindi(1)
  }

  const [features] = useState([
    {
      id: 1,
      title: ['Aarogya Setu Integration','आरोग्य सेतु एकीकरण'],
      description: ['get quick contact tracing notifications directly on your watch and get reminders and directions for your vaccine appointments','सीधे अपनी घड़ी पर त्वरित संपर्क अनुरेखण सूचनाएं प्राप्त करें और अपनी टीका नियुक्तियों के लिए अनुस्मारक और निर्देश प्राप्त करें'],
      flex: 'row',
      image: feature1,
      color: 'white',
      bg: '#FF6262',
      align: 'right'
    }, 
    {
      id: 2,
      title: ['NFC payments with UPI and Crypto','यूपीआई और क्रिप्टो से भुगतान इन.एफ.की द्वारा'],
      description: ['Pay using UPI anywhere quickly and pay using your selected cryptocurrency connected to your digital wallet for seamless transactions.','यूपीआई का उपयोग करके कहीं भी जल्दी से भुगतान करें और निर्बाध लेनदेन के लिए अपने डिजिटल वॉलेट से जुड़ी अपनी चयनित क्रिप्टोकरेंसी का उपयोग करके भुगतान करें'],
      flex: 'row-reverse',
      image: feature2,
      color: 'white',
      bg: '#62A1FF',
      align: 'left'
    },
    {
      id: 3,
      title: ['Active vital measurements with AI','ए.आई. के साथ सक्रिय महत्वपूर्ण माप'],
      description: ['Thanks to its precise sensors which use specalised AI algorithms to keep all your Health Vitals in check.','इसके सटीक सेंसर के लिए धन्यवाद जो आपके सभी स्वास्थ्य संबंधी महत्वपूर्णताओं को नियंत्रण में रखने के लिए विशिष्ट एआई एल्गोरिदम का उपयोग करते हैं।'],
      flex: 'row',
      image: feature3,
      color: 'black',
      bg: '#62FF8E',
      align: 'right'
    },
    {
      id: 4,
      title: ['Hi-Tech precision with advanced sensors','उन्नत सेंसर के साथ हाई-टेक परिशुद्धता'],
      description: ['This is the first watch ever to measure temperature using IR and an oximeter to accurately measure your vitals round the clock.','यह IR और एक ऑक्सीमीटर का उपयोग करके तापमान मापने वाली अब तक की पहली घड़ी है, जो आपके जीवन के हर हिस्से को सटीक रूप से मापती है।'],
      flex: 'row-reverse',
      image: feature4,
      color: 'white',
      bg: '#0F0F0F',
      align: 'left'
    },
    {
      id: 5,
      title: ['Digital Chakra to interact effortlessly','डिजिटल चक्र से करें काम आसान'],
      description: ['Kawatch emulates the mechanics of a real time-piece digitally to make new users feel home.','Kawatch नए उपयोगकर्ताओं को घर जैसा महसूस कराने के लिए वास्तविक समय-टुकड़ा के यांत्रिकी का डिजिटल रूप से अनुकरण करता है'],
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
      title: ['Aarogya Setu Integration','आरोग्य सेतु एकीकरण'],
      description: ['get quick contact tracing notifications directly on your watch and get reminders and directions for your vaccine appointments','सीधे अपनी घड़ी पर त्वरित संपर्क अनुरेखण सूचनाएं प्राप्त करें और अपनी टीका नियुक्तियों के लिए अनुस्मारक और निर्देश प्राप्त करें'],
      image: feature1_mobile,
      color: 'white',
      bg: '#FF6262'
    }, 
    {
      id: 2,
      title: ['NFC payments with UPI and Crypto','यूपीआई और क्रिप्टो से भुगतान इन.एफ.की द्वारा'],
      description: ['Pay using UPI anywhere quickly and pay using your selected cryptocurrency connected to your digital wallet for seamless transactions.','यूपीआई का उपयोग करके कहीं भी जल्दी से भुगतान करें और निर्बाध लेनदेन के लिए अपने डिजिटल वॉलेट से जुड़ी अपनी चयनित क्रिप्टोकरेंसी का उपयोग करके भुगतान करें'],
      image: feature2_mobile,
      color: 'white',
      bg: '#62A1FF'
    },
    {
      id: 3,
      title: ['Active vital measurements with AI','ए.आई. के साथ सक्रिय महत्वपूर्ण माप'],
      description: ['Thanks to its precise sensors which use specalised AI algorithms to keep all your Health Vitals in check.','इसके सटीक सेंसर के लिए धन्यवाद जो आपके सभी स्वास्थ्य संबंधी महत्वपूर्णताओं को नियंत्रण में रखने के लिए विशिष्ट एआई एल्गोरिदम का उपयोग करते हैं।'],
      image: feature3_mobile,
      color: 'black',
      bg: '#62FF8E'
    },
    {
      id: 4,
      title: ['Hi-Tech precision with advanced sensors','उन्नत सेंसर के साथ हाई-टेक परिशुद्धता'],
      description: ['This is the first watch ever to measure temperature using IR and an oximeter to accurately measure your vitals round the clock.','यह IR और एक ऑक्सीमीटर का उपयोग करके तापमान मापने वाली अब तक की पहली घड़ी है, जो आपके जीवन के हर हिस्से को सटीक रूप से मापती है।'],
      image: feature4,
      color: 'white',
      bg: '#0F0F0F'
    },
    {
      id: 5,
      title: ['Digital Chakra to interact effortlessly','डिजिटल चक्र से करें काम आसान'],
      description: ['Kawatch emulates the mechanics of a real time-piece digitally to make new users feel home.','Kawatch नए उपयोगकर्ताओं को घर जैसा महसूस कराने के लिए वास्तविक समय-टुकड़ा के यांत्रिकी का डिजिटल रूप से अनुकरण करता है'],
      image: feature5,
      color: 'white',
      bg: '#EE6E26'
    },
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
        <ToTop name='landing' />
        <Language hindiToggle={hindiToggle} changeLanguageToHindi={changeLanguageToHindi} />
        <Landing hindiToggle={hindiToggle} />
        <TitleBar color='#cab5eb' text={['Features','विशेषताएं'][hindiToggle]} name="to-features"/>
        {
          features.map((feature) => (
            <Feature {...feature} 
                    title={feature.title[hindiToggle]} 
                    description={feature.description[hindiToggle]}
                    key={feature.id} />
          ))
        }
        <OS  hindiToggle={hindiToggle}/>
        <Colors hindiToggle={hindiToggle} />
        <TitleBar color='#FCD5F8' text={['3D Experience','3D में अनुभव'][hindiToggle]} name="to-experience" />
        <WatchExperience />
        <Specifications />
        <TitleBar color='#43A6DE' text={['Purchase','खरीदें'][hindiToggle]}  name="to-purchase"/>
        <Purchase  hindiToggle={hindiToggle}/>
        <Footer />
      </Desktop>

      <Mobile>
        <Language hindiToggle={hindiToggle} changeLanguageToHindi={changeLanguageToHindi} />
        <MLanding  hindiToggle={hindiToggle} />
        <TitleBar color='#cab5eb' text={['Features','विशेषताएं'][hindiToggle]} name="to-features"/>
        <Carousel 
                  emulateTouch 
                  showArrows={false} 
                  swipeable 
                  showStatus={false}
                  style={{height: '100vh', margin: 0,}}>
          <FeatureMobile {...featuresMobile[0]}
                          title={featuresMobile[0].title[hindiToggle]} 
                          description={featuresMobile[0].description[hindiToggle]}/>
          <FeatureMobile {...featuresMobile[1]}
                          title={featuresMobile[1].title[hindiToggle]} 
                          description={featuresMobile[1].description[hindiToggle]}/>
          <FeatureMobile {...featuresMobile[2]}
                          title={featuresMobile[2].title[hindiToggle]} 
                          description={featuresMobile[2].description[hindiToggle]}/>
          <FeatureMobile {...featuresMobile[3]} left
                          title={featuresMobile[3].title[hindiToggle]} 
                          description={featuresMobile[3].description[hindiToggle]}/>
          <FeatureMobile {...featuresMobile[4]} left
                        title={featuresMobile[4].title[hindiToggle]} 
                        description={featuresMobile[4].description[hindiToggle]}/>
        </Carousel>
        <OS column={true} hindiToggle={hindiToggle}/>
        <ColorsMobile hindiToggle={hindiToggle} />
        <TitleBar color='#FCD5F8' text={['3D Experience','3D में अनुभव'][hindiToggle]} name="to-experience" />
        <WatchExperience />
        <Specifications />
        <TitleBar color='#43A6DE' text={['Purchase','खरीदें'][hindiToggle]}  name="to-purchase"/>
        <Purchase  hindiToggle={hindiToggle}/>
        <Footer />
      </Mobile>

    </div>
  );
}

export default App;
