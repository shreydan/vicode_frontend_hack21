import React from 'react'
import './Feature_mobile.css'

function FeatureMobile(props) {

    const left = props.left ? {alignSelf: 'flex-start'} : {alignSelf: 'center'}

    const style = {
        backgroundColor: props.bg,
        color: props.color
    }
    return (
        <div id="feature-mobile" style={style}>
            <div id="features-content-mobile">
                <div id="feature-title-mobile">{props.title}</div>
                <div id="feature-description-mobile">{props.description}</div>
            </div>
            <img src={props.image} alt={props.title} style={left} />
            
        </div>
    )
}

export default FeatureMobile
