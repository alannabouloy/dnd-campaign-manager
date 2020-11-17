import React from 'react';
import StartingButton from '../StartingButton/StartingButton';
import './StartingLinks.css'
import {Link} from 'react-router-dom'

export default function StartingLinks(props){
    return (
        <div className='starting-links'>
            <h2>Have you been here before?</h2>
            <Link to ='/register'>
                <StartingButton className = 'new-user' buttonText='New User'/>
            </Link>
            <Link to = '/login'>
                <StartingButton className = 'returning' buttonText='I have an account'/>
            </Link>
            
        </div>
    )
}