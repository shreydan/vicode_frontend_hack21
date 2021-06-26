import './MLanding.css'
import {Link} from 'react-scroll'
import logo from '../../assets/kw.png'
import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import kawatch_mobile from '../../assets/mobile/kawatch--watchface-mobile.png'

function MLanding({hindiToggle}) {

    useEffect(() => {
        AOS.init();
      }, []);

    const TagLine = ['A watch that assists you to be your best everywhere.','एक घड़ी जो आपको हर दिन अपना सर्वश्रेष्ठ बनने में मदद करती है'][hindiToggle]
    const Experience = ['Experience in 3D','3D में अनुभव'][hindiToggle]

    return (
        <div id="m_landing">
            <img src={logo} alt="logo" id='logo'/>
            <div id="m_title" data-aos="fade">KaWatch S1</div>
            <div id="m_tagline" data-aos="fade">{TagLine}</div>
            <Link to='to-experience' smooth={true}><div id="button-3d-mobile">{Experience}</div></Link>
            <img src={kawatch_mobile} alt="watch" id="m-landing-watch" data-aos="fade"/>
        </div>
    )
}

export default MLanding
