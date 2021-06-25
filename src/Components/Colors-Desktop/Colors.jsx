import React from 'react'
import './Colors.css'

import black from '../../assets/colors/black-band.png'
import blue from '../../assets/colors/blue-band.png'
import green from '../../assets/colors/green-band.png'
import red from '../../assets/colors/red-band.png'
import white from '../../assets/colors/white-band.png'

function Colors() {
    return (
        <div id="colors">
            <div id="colors-content">
                <div id="colors-title">A colour for every occasion.</div>
                <div id="colors-tagline">Bands made from high quality breathable materials and vibrant colours to show off all the time.</div>
            </div>
            <div className="bands">
                <img src={white} alt="white" />
                <img src={red} alt="red" />
                <img src={green} alt="green" />
                <img src={blue} alt="blue" />
                <img src={black} alt="black" />
            </div>
        </div>
    )
}

export default Colors
