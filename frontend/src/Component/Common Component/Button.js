import React from 'react'

function Button(props) {
    return (
        
        <button href={props.link} className={props.style}>{props.btntitle}</button>
        
    )
}

export default Button
