import React from 'react'
import './Landing.css'
import {Link} from 'react-scroll'
import logo from '../../assets/kw.png'
import landingimage from '../../assets/kawatch--watchface.png'

function Landing() {


    return (
        <div id="landing">
            <div className="nav">
                <img src={logo} alt="" id="logo"/>

                <div className="menu-bar">
                    <div>Home</div>
                    <Link to='to-features' smooth={true}><div>Features</div></Link>
                    <Link to='to-purchase' smooth={true}><div>Purchase</div></Link>
                </div>

            </div>

            <div className="content">
                <div id="text">
                    <div id="title">KaWatch <br/> S1</div>
                    <div id="tagline">A watch that assists you to be your best everywhere.</div>

                    <Link to='to-experience' smooth={true}><div id="button-3d">Experience in 3D</div></Link>
                </div>
                <img src={landingimage} alt="" />
            </div>
        </div>
    )
}

export default Landing
