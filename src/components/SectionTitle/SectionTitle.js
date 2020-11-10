import React from 'react'

export default function SectionTitle(props){
    return (
        <div className={props.className}>
            <h2>{props.text}</h2>
        </div>
    )
}