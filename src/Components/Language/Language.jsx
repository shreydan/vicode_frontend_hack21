import React from 'react'
import './Language.css'

function Language({hindiToggle, changeLanguageToHindi}) {
    const engStyle = hindiToggle===0 ? {color: '#c59eff'} : {color: 'black'}
    const hinStyle = hindiToggle===1 ? {color: '#c59eff'} : {color: 'black'}
    return (
        <div id="lang">
            <div style={engStyle} onClick={changeLanguageToHindi}>English</div>
            <div style={hinStyle} onClick={changeLanguageToHindi}>हिंदी</div>
        </div>
    )
}

export default Language
