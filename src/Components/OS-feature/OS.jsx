import React, {useEffect, useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './OS.css'

import watchface from '../../assets/watchface.png'
import emergency from '../../assets/emergency.png'
import walk from '../../assets/walk.png'

function Card({image, text}) {
    return (
        <div id="card">
            <img src={image} alt="" data-aos="fade-up"/>
            <div id="os-text" data-aos="fade">{text}</div>
        </div>
    )
}


function OS({column, hindiToggle}) {

    useEffect(() => {
        AOS.init();
      }, []);

    const direction = column ? {flexDirection: 'column'} : {flexDirection: 'row'};

    const [cards] = useState([
        {
            id: 1,
            image: watchface,
            text: ['customizable watch faces','अनुकूलन योग्य वॉचफेस'][hindiToggle]
        },
        {
            id: 2,
            image: emergency,
            text: ['send quick SOS to selected contacts','चयनित संपर्कों को त्वरित एसओएस भेजें'][hindiToggle]
        },
        {
            id: 3,
            image: walk,
            text: ['navigation using different modes','विभिन्न मोड का उपयोग कर नेविगेशन'][hindiToggle]
        },
    ])


    return (
        <div id="banner" >
            <div id="os-title" data-aos="fade">{['A Dynamic OS to Live For', 'जीवन को आसान बनाने के लिए एक गतिशील ओएस'][hindiToggle]}</div>
            <div className="cards" style={direction}>
                {
                    cards.map((card) => (
                        <Card {...card} />
                    ))
                }
            </div>
        </div>
    )
}

export default OS
