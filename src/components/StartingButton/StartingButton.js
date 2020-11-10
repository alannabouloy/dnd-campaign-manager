import React from 'react';
import './StartingButton.css'

export default function StartingButton(props) {
    let buttonText = 'I have an account';

    if(props.className === `new-user`){
        buttonText = `I'm new`;
    }

    return (
        <div className = {props.className}>
            <button>{buttonText}</button>
        </div>
    )
    
}
