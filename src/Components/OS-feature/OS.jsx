import React, {useState} from 'react'
import './OS.css'

import watchface from '../../assets/watchface.png'
import emergency from '../../assets/emergency.png'
import walk from '../../assets/walk.png'

function Card({image, text}) {
    return (
        <div id="card">
            <img src={image} alt="" />
            <div id="os-text">{text}</div>
        </div>
    )
}


function OS({column}) {

    const direction = column ? {flexDirection: 'column'} : {flexDirection: 'row'};

    const [cards] = useState([
        {
            id: 1,
            image: watchface,
            text: 'customizable watch faces'
        },
        {
            id: 2,
            image: emergency,
            text: 'send quick SOS to selected contacts'
        },
        {
            id: 3,
            image: walk,
            text: 'navigation using different modes'
        },
    ])


    return (
        <div id="banner">
            <div id="os-title">A dynamic OS to live for</div>
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
