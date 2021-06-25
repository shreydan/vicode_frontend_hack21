import React from 'react'
import Iframe from 'react-iframe'
import './WatchExperience.css'

function WatchExperience() {
    return (
        <div id="view-3d">
            <div id="view-text">Drag around with mouse or use touch gestures to interact with KaWatch.</div>
            <div id="view-area">
            <Iframe src='https://my.spline.design/kawatch-713eb7f0c03ff2d303c470550d913630/' 
                    frameborder='0' 
                    width='100%' 
                    height='100%'></Iframe>
            </div>
        </div>
    )
}

export default WatchExperience
