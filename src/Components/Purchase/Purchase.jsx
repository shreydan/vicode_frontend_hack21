import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Purchase.css'

import purchase_image from '../../assets/purchase.png'

function Purchase({hindiToggle}) {

    const text = ['We know you want one now','हम जानते हैं कि आप खरीदना चाहते हैं'][hindiToggle]
    const btn = ['Buy Now on Amazon','अमेज़न पर अभी खरीदें'][hindiToggle]

    return (
        <div id="purchase">
            <div id="purchase-text">{text}</div>
            <a id="purchase-button" href="https://amazon.in" target='_blank' rel='noreferrer'>
                <div>{btn}</div>
                <FontAwesomeIcon icon={faArrowRight} id="icon"/>
            </a>
            <img src={purchase_image} alt="purchase" />
        </div>
    )
}

export default Purchase
