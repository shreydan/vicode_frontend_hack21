import React from 'react'
import './ToTop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'

function ToTop({name}) {
    return (
        <Link to={name} smooth={true}>
            <div id="toTop">
                <FontAwesomeIcon icon={faArrowUp} id="icon"/>
            </div>
        </Link>
    )
}

export default ToTop
