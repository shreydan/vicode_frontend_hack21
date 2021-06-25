import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Purchase.css'

import purchase_image from '../../assets/purchase.png'

function Purchase() {
    return (
        <div id="purchase">
            <div id="purchase-text">We know you want one now.</div>
            <div id="purchase-button">
                <div>Buy Now</div>
                <FontAwesomeIcon icon={faArrowRight} id="icon"/>
            </div>
            <img src={purchase_image} alt="purchase" />
        </div>
    )
}

export default Purchase
