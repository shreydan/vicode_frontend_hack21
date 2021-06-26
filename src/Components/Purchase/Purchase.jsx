import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Purchase.css'

import purchase_image from '../../assets/purchase.png'

function Purchase() {
    return (
        <div id="purchase">
            <div id="purchase-text">We know you want one now.</div>
            <a id="purchase-button" href="https://amazon.in" target='_blank' rel='noreferrer'>
                <div>Buy Now on Amazon</div>
                <FontAwesomeIcon icon={faArrowRight} id="icon"/>
            </a>
            <img src={purchase_image} alt="purchase" />
        </div>
    )
}

export default Purchase
