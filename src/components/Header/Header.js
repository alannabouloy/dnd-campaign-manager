import React from 'react';
import './Header.css';

export default function Header(props){
    let heading = '';
    let currentCampaign = 'Campaign One'
    switch(props.className){
        case 'user-dash':
            heading = 'My Campaigns';
            break;
        case 'campaign-dash':
            heading = currentCampaign;
            break;
        default:
            heading = 'DnD Campaign Manager'
            break;
    }

    return (
        <header className={props.className}>
            <h1>{heading}</h1>
            <p>A place to go to keep track of all of your adventures</p>
        </header>
    )
}