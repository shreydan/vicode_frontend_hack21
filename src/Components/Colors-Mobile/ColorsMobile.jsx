import React from 'react'
import './ColorsMobile.css'
import {Carousel} from 'react-responsive-carousel'
import black from '../../assets/colors/black-band.png'
import blue from '../../assets/colors/blue-band.png'
import green from '../../assets/colors/green-band.png'
import red from '../../assets/colors/red-band.png'
import white from '../../assets/colors/white-band.png'


function ColorsMobile({hindiToggle}) {

    const Title = ['A colour for every occasion.','हर अवसर के लिए एक रंग'][hindiToggle]
    const TagLine = ['Bands made from high quality breathable materials and vibrant colours to show off all the time.','हर समय दिखाने के लिए उच्च गुणवत्ता वाली सांस लेने वाली सामग्री और जीवंत रंगों से बने बैंड।'][hindiToggle]

    return (
        <div id="colors-mobile">
            <div id="colors-mobile-content">
                <div id="colors-title-mobile">{Title}</div>
                <div id="colors-tag-mobile">{TagLine}</div>
            </div>
            <Carousel   emulateTouch 
                        showArrows={false} 
                        swipeable 
                        showStatus={false}
                        >
                <img src={black} alt="" />
                <img src={blue} alt="" />
                <img src={red} alt="" />
                <img src={green} alt="" />
                <img src={white} alt="" />
            </Carousel>
        </div>
    )
}

export default ColorsMobile
