import React, {useState} from 'react'
import './Landing.css'
import logo from '../../assets/kw.png'

function Landing() {


    return (
        <div id="landing">
            <div className="nav">
                <img src={logo} alt="" />

                <div className="menu-bar">
                    <div>Home</div>
                    <div>Features</div>
                    <div>Purchase</div>
                </div>

            </div>

            <div className="content"></div>
        </div>
    )
}

export default Landing
