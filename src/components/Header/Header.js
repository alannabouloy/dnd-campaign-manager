import React from 'react';
import './Header.css';

export default function Header(props){
    return (
        <header className={props.className}>
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
        </header>
    )
}