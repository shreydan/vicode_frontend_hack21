import React from 'react'
import './Landing.css'
import logo from '../../assets/kw.png'
import landingimage from '../../assets/kawatch--watchface.png'

function Landing() {


    return (
        <div id="landing">
            <div className="nav">
                <img src={logo} alt="" id="logo"/>

                <div className="menu-bar">
                    <div>Home</div>
                    <div>Features</div>
                    <div>Purchase</div>
                </div>

            </div>

            <div className="content">
                <div id="text">
                    <div id="title">Kawatch <br/> S1</div>
                    <div id="tagline">A watch that assists you to be your best everywhere.</div>

                    <div id="button-3d">Experience in 3D</div>
                </div>
                <img src={landingimage} alt="" />
            </div>
        </div>
    )
}

export default Landing
