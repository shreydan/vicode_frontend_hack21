import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div id="footer">
            <div className="icons">
                <a href="https://instagram.com/mxsheexd" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram} id="icon"/></a>
                <a href="https://twitter.com/shreydan" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faTwitter} id="icon"/></a>
            </div>
            <div id="company-name">
                KaWatch Inc.
            </div>
        </div>
    )
}

export default Footer
