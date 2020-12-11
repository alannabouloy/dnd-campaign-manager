import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import './StartingLinks.css'

export default function StartingLinks(props){
    return (
        <div className='starting-links'>
            <h2>Have you been here before?</h2>
                <ButtonLink id = 'new-user' buttonText='New User' linkTo = '/register' />
                <ButtonLink id = 'returning' buttonText='I have an account' linkTo = '/login' />
                <ButtonLink id = 'demo' buttonText ='Demo' linkTo = '/demoaccount/dash' />
        </div>
    )
}