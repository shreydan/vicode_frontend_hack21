import React, {useState} from 'react'
import './Specifications.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const SpecData = ({title, list}) => {

    const [open, setOpen] = useState(false)
    const icon = open ? faMinus : faPlus

    return (
        <div className="spec-data">
            <div id="spec-title" onClick={() => setOpen(!open)}>
                <div>{title}</div>
                <FontAwesomeIcon icon={icon} id="icon"/>
            </div>
            {open && <div id="spec-list">
                {
                    list.map((item, key) => (
                        <div id="spec-item" key={key}>{item}</div>
                    ))
                }
            </div>}
        </div>
    )
}

function Specifications() {

    const [specs] = useState([
        {
            key: 1,
            title: 'Connectivity',
            list: ['iOS 8+ and Android 7+','Wifi','Bluetooth','NFC']
        },
        {
            key: 2,
            title: 'Display',
            list: ['Round AMOLED','1.5" screen','380px * 380px resolution']
        },
        {
            key: 3,
            title: 'Battery',
            list: ['180 mAh','3 day working time','10 days standby']
        },
        {
            key: 3,
            title: 'Sensors',
            list: ['IR Thermometer','Oximeter','Accelerometer','GPS','Gravity','Gyroscope']
        },
        {
            key: 4,
            title: 'Physical',
            list: ['44mm width','Polycarbonate material','50 grams','24mm silicon strap','IP-68 water resistance']
        },
        {
            key: 5,
            title: 'Health Monitoring',
            list: ['Heart-rate','Steps tracker','Calories','Distance','Sleep, Stress tracking','Sports mode']
        },
        {
            key: 6,
            title: 'Smart Features',
            list: ['Find my phone','NFC payments','Crypto-wallet linking','Google Fit','Taptic alerts','Maps navigation']
        },
    ])

    return (
        <div id="specs">
            <div id="specifications-title">Specifications</div>
            {
                specs.map((spec) => (
                    <SpecData {...spec} key={spec.key} />
                ))
            }
        </div>
    )
}

export default Specifications
