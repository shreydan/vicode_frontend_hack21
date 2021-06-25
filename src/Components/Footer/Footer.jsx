import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div id="footer">
            <div className="icons">
                <FontAwesomeIcon icon={faInstagram} id="icon"/>
                <FontAwesomeIcon icon={faTwitter} id="icon"/>
            </div>
            <div id="company-name">
                KaWatch Inc.
            </div>
        </div>
    )
}

export default Footer
