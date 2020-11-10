import React from 'react';
import './StartingButton.css'

export default function StartingButton(props) {
    return (
        <div className = {props.className}>
            <button>{props.buttonText}</button>
        </div>
    )
    
}
