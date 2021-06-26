import React from 'react'
import './TitleBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function TitleBar({color, text, name}) {
    return (
        <div className="titlebar" style={{backgroundColor: color}} id={name}>
            <div id="text">{text}</div>
            <FontAwesomeIcon icon={faChevronDown} id="icon"/>
        </div>
    )
}

export default TitleBar