import React from 'react'
import './Feature.css'

function Feature(props) {

    const style = {
        backgroundColor: props.bg,
        color: props.color,
        flexDirection: props.flex,
        textAlign: props.align
    }

    return (
        <div id="feature" style={style}>
            <img src={props.image} alt={props.title} />
            <div id="content">
                <div id="feature-title">{props.title}</div>
                <div id="feature-description">{props.description}</div>
            </div>
        </div>
    )
}

export default Feature
