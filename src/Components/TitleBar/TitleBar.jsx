import React from 'react'
import './TitleBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function TitleBar({color, text}) {
    return (
        <div id="titlebar" style={{backgroundColor: color}}>
            <div id="text">{text}</div>
            <FontAwesomeIcon icon={faChevronDown} id="icon"/>
        </div>
    )
}

export default TitleBar