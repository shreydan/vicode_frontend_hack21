import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './Landing.css'
import {Link} from 'react-scroll'
import logo from '../../assets/kw.png'
import landingimage from '../../assets/kawatch--watchface.png'

function Landing({hindiToggle}) {

    useEffect(() => {
        AOS.init();
      }, []);

    const Specifications = ['Specifications','विवरण'][hindiToggle]
    const Features = ['Features','विशेषताएं'][hindiToggle]
    const Purchase = ['Purchase','खरीदें'][hindiToggle]
    const TagLine = ['A watch that assists you to be your best everywhere.','एक घड़ी जो आपको हर दिन अपना सर्वश्रेष्ठ बनने में मदद करती है'][hindiToggle]
    const Experience = ['Experience in 3D','3D में अनुभव'][hindiToggle]

    return (
        <div id="landing">
            <div className="nav">
                <img src={logo} alt="" id="logo"/>

                <div className="menu-bar">
                    <Link to='to-features' smooth={true}><div>{Features}</div></Link>
                    <Link to='specs' smooth={true}><div>{Specifications}</div></Link>
                    <Link to='to-purchase' smooth={true}><div>{Purchase}</div></Link>
                </div>

            </div>

            <div className="content" data-aos="fade-right">
                <div id="text">
                    <div id="title">KaWatch <br/> S1</div>
                    <div id="tagline">{TagLine}</div>

                    <Link to='to-experience' smooth={true}><div id="button-3d">{Experience}</div></Link>
                </div>
                <img src={landingimage} alt="" data-aos="fade-left"/>
            </div>
        </div>
    )
}

export default Landing
