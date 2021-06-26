import React from 'react'
import './Language.css'

function Language({hindiToggle, changeLanguageToHindi}) {
    const engStyle = hindiToggle===0 ? {color: 'blue'} : {color: 'black'}
    const hinStyle = hindiToggle===1 ? {color: 'blue'} : {color: 'black'}
    return (
        <div id="lang">
            <div style={engStyle} onClick={changeLanguageToHindi}>English</div>
            <div style={hinStyle} onClick={changeLanguageToHindi}>Hindi</div>
        </div>
    )
}

export default Language
