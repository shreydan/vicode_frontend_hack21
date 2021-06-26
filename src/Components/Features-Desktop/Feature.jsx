import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import './Feature.css'

function Feature(props) {

    useEffect(() => {
        AOS.init();
      }, []);

    const style = {
        backgroundColor: props.bg,
        color: props.color,
        flexDirection: props.flex,
        textAlign: props.align
    }

    return (
        <div id="feature" style={style}>
            <img src={props.image} alt={props.title} data-aos="fade-up"/>
            <div id="content" data-aos="fade">
                <div id="feature-title">{props.title}</div>
                <div id="feature-description">{props.description}</div>
            </div>
        </div>
    )
}

export default Feature
