import React from 'react'
import './SectionTitle.css'

export default function SectionTitle(props){
    return (
        <div className={props.className}>
            <h2>{props.text}</h2>
        </div>
    )
}