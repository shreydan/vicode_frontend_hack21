import React from 'react'
import './MLanding.css'
import {Link} from 'react-scroll'
import logo from '../../assets/kw.png'

import kawatch_mobile from '../../assets/mobile/kawatch--watchface-mobile.png'

function MLanding() {
    return (
        <div id="m_landing">
            <img src={logo} alt="logo" id='logo'/>
            <div id="m_title">KaWatch S1</div>
            <div id="m_tagline">A watch that assists you to be your best everywhere.</div>
            <Link to='to-experience' smooth={true}><div id="button-3d-mobile">Experience in 3D</div></Link>
            <img src={kawatch_mobile} alt="watch" id="m-landing-watch"/>
        </div>
    )
}

export default MLanding
