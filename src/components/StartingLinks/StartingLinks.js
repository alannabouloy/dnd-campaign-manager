import React from 'react';
import StartingButton from '../StartingButton/StartingButton';
import './StartingLinks.css'

export default function StartingLinks(props){
    return (
        <div class='starting-links'>
            <h2>Have you been here before?</h2>
            <StartingButton className = 'new-user' buttonText='New User'/>
            <StartingButton className = 'returning' buttonText='I have an account'/>
        </div>
    )
}